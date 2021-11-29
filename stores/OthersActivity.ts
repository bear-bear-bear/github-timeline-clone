import { flow, makeAutoObservable } from 'mobx';
import oauth2Axios from '@lib/axios';
import { github } from '@lib/oauth';
import type {
  OthersEvent,
  FetchState,
  User,
  OwnerRepository,
  EventType,
} from '@typings/oauth';
import type { RootStore } from './index';
import qs from 'qs';

export default class OthersActivityStore {
  rootStore;
  activities: (OthersEvent | OthersEvent[])[] = [];
  state: FetchState = 'init';
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

  fetchNextActivities = flow(function* (
    this: OthersActivityStore,
    user: User,
    page: number,
  ) {
    this.state = 'loading';

    const query = qs.stringify({
      page,
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
        oauth2Axios
          .get<OwnerRepository>(`${github.API_HOST}/repos/${repo.name}`)
          .then(({ data }) => data),
      );

      const repoDetailInfos: OwnerRepository[] = yield Promise.all(
        repoDetailInfoRequests,
      ).then((results) => results);

      const activitiesWithDetailRepoInfo: OthersEvent[] =
        receivedActivities.map((activity, i) => ({
          ...activity,
          repo: repoDetailInfos[i],
        }));

      const passTypes: EventType[] = ['PushEvent', 'CreateEvent', 'WatchEvent'];
      const processedActivities = activitiesWithDetailRepoInfo.reduce(
        (acc, currActivity) => {
          const currType = currActivity.type;
          const currActorId = currActivity.actor.id;

          if (!passTypes.includes(currType)) {
            return acc; // type 필터링
          }

          const lastItem = acc[acc.length - 1];

          // type과 actor가 같은 항목끼리 배열로 래핑
          if (!Array.isArray(lastItem)) {
            if (
              !(lastItem.type === currType && lastItem.actor.id === currActorId)
            ) {
              return acc.concat(currActivity);
            }
            const nextItem = [acc.pop() as OthersEvent, currActivity];
            return acc.concat(nextItem);
          }

          if (
            !(
              lastItem[0].type === currType &&
              lastItem[0].actor.id === currActorId
            )
          ) {
            return acc.concat(currActivity);
          }
          const nextItem = [...(acc.pop() as OthersEvent[]), currActivity];
          return acc.concat(nextItem);
        },
        [] as (OthersEvent | OthersEvent[])[],
      );

      this.activities.concat(processedActivities);
      this.state = 'done';
      this.currentPage += 1;
    } catch (error) {
      console.error(error);
      this.state = 'error';
    }
  });
}
