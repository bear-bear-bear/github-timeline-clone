import { flow, makeAutoObservable } from 'mobx';
import oauth2Axios from '@lib/axios';
import { github } from '@lib/oauth';
import type { Event, FetchState, User } from '@typings/oauth';
import type { RootStore } from './index';

export default class MyActivityStore {
  rootStore;
  activities: Event[] = [];
  state: FetchState = 'init';

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get isNotFetched() {
    return this.state === 'init' || this.state === 'loading';
  }

  get recentActivities() {
    const COUNT = 3;

    return this.activities
      .filter((activity) => {
        return activity.type !== 'PushEvent' && activity.type !== 'WatchEvent';
      })
      .slice(0, COUNT);
  }

  fetchRepos = flow(function* (this: MyActivityStore, user: User) {
    this.activities = [];
    this.state = 'loading';

    try {
      this.activities = yield oauth2Axios
        .get<Event[]>(`${github.API_HOST}/user/${user.login}/events`)
        .then(({ data }) => data);
      this.state = 'done';
    } catch (error) {
      console.error(error);
      this.state = 'error';
    }
  });
}
