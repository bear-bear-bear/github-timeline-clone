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
    const RETURN_COUNT = 3;
    const hiddenEvents = ['CreateEvent', 'PushEvent', 'WatchEvent'];

    const WEEK = 7 * 24 * 60 * 60 * 1000;
    const before3Weeks = new Date(Date.now() - 3 * WEEK);

    return this.activities
      .filter(
        (activity) =>
          activity.type &&
          !hiddenEvents.includes(activity.type) &&
          new Date(activity.created_at as string) > before3Weeks,
      )
      .slice(0, RETURN_COUNT);
  }

  fetchActivities = flow(function* (this: MyActivityStore, user: User) {
    this.activities = [];
    this.state = 'loading';

    try {
      this.activities = yield oauth2Axios
        .get<Event[]>(
          `${github.API_HOST}/users/${user.login}/events?per_page=100`,
        )
        .then(({ data }) => data);
      this.state = 'done';
    } catch (error) {
      console.error(error);
      this.state = 'error';
    }
  });
}
