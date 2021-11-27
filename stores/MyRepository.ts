import { flow, makeAutoObservable } from 'mobx';
import type { RepositoryInfos, FetchState, User } from '@typings/oauth';
import oauth2Axios from '@lib/axios';
import type { RootStore } from './index';

export default class MyRepositoryStore {
  rootStore;
  repos: RepositoryInfos = [];
  state: FetchState = 'init';
  RECENT_SHOWN_COUNT = 7;
  MAX_SHOWN_COUNT = 50;
  showMoreRepo = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get isNotFetched() {
    return this.state === 'init' || this.state === 'loading';
  }

  get recentRepos() {
    if (!this.showMoreRepo) {
      return this.repos.slice(0, this.RECENT_SHOWN_COUNT);
    }
    return this.repos.slice(0, this.MAX_SHOWN_COUNT);
  }

  findRepos(searchWord: string) {
    return this.recentRepos.filter((repo) =>
      repo.full_name.includes(searchWord),
    );
  }

  fetchRepos = flow(function* (this: MyRepositoryStore, user: User) {
    this.repos = [];
    this.state = 'loading';

    const tempPastDate = '1900-01-01';
    try {
      this.repos = yield oauth2Axios
        .get<RepositoryInfos>(user.repos_url)
        .then(({ data }) =>
          data.sort(
            (a, b) =>
              new Date(b.updated_at ?? tempPastDate).getTime() -
              new Date(a.updated_at ?? tempPastDate).getTime(),
          ),
        );
      this.state = 'done';
    } catch (error) {
      console.error(error);
      this.state = 'error';
    }
  });
}
