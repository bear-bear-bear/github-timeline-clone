import { flow, makeAutoObservable } from 'mobx';
import type { FetchState, User } from '@typings/oauth';
import oauth2Axios from '@lib/axios';
import type { RootStore } from './index';
import { Notification } from '@typings/oauth';
import { github } from '@lib/oauth';

export default class NotificationStateStore {
  rootStore;
  isUnreadNotification = false;
  state: FetchState = 'init';

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get isNotFetched() {
    return this.state === 'init' || this.state === 'loading';
  }

  fetch = flow(function* (this: NotificationStateStore) {
    this.state = 'loading';

    try {
      const endpoint = '/notifications?per_page=1';
      this.isUnreadNotification = yield oauth2Axios
        .get<Notification[]>(github.API_HOST + endpoint)
        .then(({ data }) => data.length !== 0);
      this.state = 'done';
    } catch (error) {
      console.error(error);
      this.state = 'error';
    }
  });
}
