import { flow, makeAutoObservable } from 'mobx';
import oauth2Axios from '@lib/axios';
import { github } from '@lib/oauth';
import type { SearchedRepository, FetchState } from '@typings/oauth';
import type { RootStore } from './index';
import qs from 'qs';

export default class HotRepositoryStore {
  rootStore;
  repos: SearchedRepository[] = [];
  state: FetchState = 'init';

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get isNotFetched() {
    return this.state === 'init' || this.state === 'loading';
  }

  get hottestRepos() {
    const RETURN_COUNT = 3;

    return this.repos.filter((repo) => !!repo.language).slice(0, RETURN_COUNT);
  }

  fetchRepos = flow(function* (this: HotRepositoryStore) {
    this.repos = [];
    this.state = 'loading';

    const Week = 7 * 24 * 60 * 60 * 1000;
    const beforeWeek = new Date(Date.now() - Week).toISOString().split('T')[0];
    const query = qs.stringify({
      q: `created:>${beforeWeek}`,
      sort: 'stars',
      order: 'desc',
      per_page: 30,
    });

    try {
      this.repos = yield oauth2Axios
        .get(`${github.API_HOST}/search/repositories?${query}`)
        .then(({ data }) => data.items as SearchedRepository[]);
      this.state = 'done';
    } catch (error) {
      console.error(error);
      this.state = 'error';
    }
  });
}
