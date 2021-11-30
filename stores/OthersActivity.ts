import qs from 'qs';
import { flow, makeAutoObservable } from 'mobx';
import oauth2Axios from '@lib/axios';
import type {
  OthersEvent,
  FetchState,
  User,
  EventType,
  OwnerRepository,
} from '@typings/oauth';
import type { RootStore } from './index';

export default class OthersActivityStore {
  rootStore;
  activities: OthersEvent[] = [];
  state: FetchState = 'init';
  initialFetchDone = false;
  isFetchedAllData = false;
  currentPage = 1;
  PER_PAGE = 100;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get isNotFetched() {
    return this.state === 'init' || this.state === 'loading';
  }

  get processedActivities() {
    const passTypes: EventType[] = ['PushEvent', 'CreateEvent', 'WatchEvent'];

    return this.activities.reduce((acc, currActivity) => {
      const currType = currActivity.type;
      const currActorId = currActivity.actor.id;

      if (!passTypes.includes(currType)) {
        return acc; // type 필터링
      }

      const lastItem = acc.pop();
      if (!lastItem) {
        return [currActivity]; // 순환의 시작
      }

      // type과 actor가 같은 항목끼리 배열로 래핑
      if (!Array.isArray(lastItem)) {
        if (
          !(lastItem.type === currType && lastItem.actor.id === currActorId)
        ) {
          return [...acc, lastItem, currActivity];
        }
        return [...acc, [lastItem, currActivity]];
      }

      if (
        !(lastItem[0].type === currType && lastItem[0].actor.id === currActorId)
      ) {
        return [...acc, lastItem, currActivity];
      }
      return [...acc, [...lastItem, currActivity]];
    }, [] as (OthersEvent | OthersEvent[])[]);
  }

  fetchNextActivities = flow(function* (this: OthersActivityStore, user: User) {
    this.state = 'loading';

    const query = qs.stringify({
      page: this.currentPage,
      per_page: this.PER_PAGE,
    });

    try {
      const receivedActivities: OthersEvent[] = yield oauth2Axios
        .get<OthersEvent[]>(`${user.received_events_url}?${query}`)
        .then(({ data }) => data);

      if (receivedActivities.length < this.PER_PAGE) {
        this.isFetchedAllData = true;
      }

      const repoDetailInfoRequests = receivedActivities.map(({ repo }) =>
        oauth2Axios.get<OwnerRepository>(repo.url).then(({ data }) => data),
      );

      const repoDetailInfosSettledResult = yield Promise.allSettled(
        repoDetailInfoRequests,
      );

      const activitiesWithDetailRepoInfo: OthersEvent[] =
        receivedActivities.map((activity, i) => {
          const currDetailRepo = repoDetailInfosSettledResult[i];
          if (currDetailRepo.status === 'rejected') return activity;
          return {
            ...activity,
            repo: currDetailRepo.value as OwnerRepository,
          };
        });

      this.activities = [...this.activities, ...activitiesWithDetailRepoInfo];
      this.state = 'done';
      this.initialFetchDone = true;
      this.currentPage++;
    } catch (error) {
      console.error(error);
      this.state = 'error';
    }
  });
}
