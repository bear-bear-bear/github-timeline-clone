import { flow, makeAutoObservable } from 'mobx';
import type { RepositoryInfos, FetchState } from '@typings/oauth';
import oauth2Axios from '@lib/axios';
import type { RootStore } from './index';

export default class MyRepositoryStore {
  rootStore;
  repos: RepositoryInfos = [];
  state: FetchState = 'init';

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get isNotFetched() {
    return this.state === 'init' || this.state === 'loading';
  }

  get recentRepos() {
    const COUNT = 6;

    return [...this.repos]
      .sort((a, b) => {
        const distantPast = new Date('1900-01-01');
        const updateTimeA = new Date(a.updated_at || distantPast).getTime();
        const updateTimeB = new Date(b.updated_at || distantPast).getTime();

        return updateTimeB - updateTimeA;
      })
      .slice(0, COUNT + 1);
  }

  findRepos(searchWord: string) {
    const tokens = searchWord.split('').filter((v) => v !== ' ');

    return this.repos.filter((repo) => {
      const isContainAllToken = (str: string) =>
        tokens.every((token) => str.includes(token));

      return isContainAllToken(repo.full_name);
    });
  }

  fetchRepos = flow(function* (this: MyRepositoryStore, fetchUrl: string) {
    this.repos = [];
    this.state = 'loading';

    try {
      this.repos = yield oauth2Axios
        .get<RepositoryInfos>(fetchUrl)
        .then(({ data }) => data);
      this.state = 'done';
    } catch (error) {
      console.error(error);
      this.state = 'error';
    }
  });
}
