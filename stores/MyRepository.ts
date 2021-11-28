import qs from 'qs';
import { flow, makeAutoObservable } from 'mobx';
import type { RepositoryInfo, FetchState } from '@typings/oauth';
import oauth2Axios from '@lib/axios';
import type { RootStore } from './index';
import { github } from '@lib/oauth';

export default class MyRepositoryStore {
  rootStore;
  repos: RepositoryInfo[] = [];
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

  fetchRepos = flow(function* (this: MyRepositoryStore) {
    this.repos = [];
    this.state = 'loading';

    const query = qs.stringify({
      sort: 'created',
      per_page: '100',
    });
    try {
      this.repos = yield oauth2Axios
        .get<RepositoryInfo[]>(`${github.API_HOST}/user/repos?${query}`)
        .then(({ data }) => data);
      this.state = 'done';
    } catch (error) {
      console.error(error);
      this.state = 'error';
    }
  });
}
