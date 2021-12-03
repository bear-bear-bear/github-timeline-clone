import qs from 'qs';
import { flow, makeAutoObservable } from 'mobx';
import oauth2Axios from '@lib/axios';
import type {
  OthersEvent,
  FetchState,
  User,
  OwnerRepository,
} from '@typings/oauth';
import type { RootStore } from './index';
import axios from 'axios';

export default class OthersActivityStore {
  rootStore;
  activities: OthersEvent[] = [];
  state: FetchState = 'init';
  initialFetchDone = false;
  isFetchedAllData = false;
  currentPage = 1;
  PER_PAGE = 60;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get isNotFetched() {
    return this.state === 'init' || this.state === 'loading';
  }

  get processedActivities() {
    const passTypes = ['CreateEvent', 'WatchEvent', 'ForkEvent'];
    const cacheForDeduplicate: string[] = [];

    return this.activities.reduce((acc, currActivity) => {
      const currType = currActivity.type;
      const currActorId = currActivity.actor.id;
      const currRepo = currActivity.repo.id;

      if (!passTypes.includes(currType) || !currActivity.repo.full_name) {
        return acc; // type 필터링, 404 repo 필터링
      }

      const currActivityCache = `${currType}${currActorId}${currRepo}`;
      if (cacheForDeduplicate.includes(currActivityCache)) {
        return acc; // 중복 이벤트 필터링
      }
      cacheForDeduplicate.push(currActivityCache);

      const lastItem = acc.pop();
      if (!lastItem) {
        return [currActivity]; // 순환의 시작
      }

      // 타입과 액터가 같은 항목끼리 배열로 래핑
      if (!Array.isArray(lastItem)) {
        // 같은 타입 + 같은 액터가 아니라면
        if (
          !(lastItem.type === currType && lastItem.actor.id === currActorId)
        ) {
          return [...acc, lastItem, currActivity];
        }
        // 같은 타입 + 같은 액터 + 같은 레포라면 (완전히 같은 이벤트라면)
        if (lastItem.repo.id === currRepo) {
          return [...acc, lastItem];
        }
        // 같은 레포는 아니지만 같은 타입 + 같은 액터라면
        return [...acc, [lastItem, currActivity]];
      }

      if (
        !(
          lastItem[lastItem.length - 1].type === currType &&
          lastItem[lastItem.length - 1].actor.id === currActorId
        )
      ) {
        return [...acc, lastItem, currActivity];
      }
      if (lastItem[lastItem.length - 1].repo.id === currRepo) {
        return [...acc, lastItem];
      }
      return [...acc, [...lastItem, currActivity]];
    }, [] as (OthersEvent | OthersEvent[])[]);
  }

  fetchNextActivities = flow(function* (
    this: OthersActivityStore,
    user: User,
    accessToken: string,
  ) {
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
        axios
          .get<OwnerRepository>(repo.url, {
            headers: {
              accept: 'application/vnd.github.v3+json',
              Authorization: `token ${accessToken}`,
            }, // 인터셉터를 거쳐 헤더를 세팅하면 토큰 인증 과정에서 수십개 요청이 직렬처리되어 엄청 느려짐
          })
          .then(({ data }) => data),
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
