import { flow, makeAutoObservable } from 'mobx';
import type { RepositoryInfos, FetchState, User } from '@typings/oauth';
import oauth2Axios from '@lib/axios';
import type { RootStore } from './index';

export default class StarredOrWatchedRepositoryStore {
  rootStore;
  repos: RepositoryInfos = [];
  state: FetchState = 'init';
  login: User['login'] = '';
  SEARCH_RESULT_COUNT = 7;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get isNotFetched() {
    return this.state === 'init' || this.state === 'loading';
  }

  get recentRepos() {
    const MY_REPO_COUNT = 2;

    const myRepos = this.repos
      .filter((repo) => repo.owner.login === this.login)
      .slice(0, MY_REPO_COUNT);
    const othersRepos = this.repos
      .filter((repo) => repo.owner.login !== this.login)
      .slice(0, this.SEARCH_RESULT_COUNT - MY_REPO_COUNT);

    return [...myRepos, ...othersRepos];
  }

  findReposByCharTokens(searchWord: string) {
    const charTokens = searchWord.split('').filter((v) => v !== ' ');

    return this.repos
      .filter((repo) => {
        const isContainAllToken = (str: string) =>
          charTokens.every((word) => str.includes(word));

        return isContainAllToken(repo.full_name);
      })
      .sort((a, b) => {
        // 내 레포지토리를 앞 순서로
        if (a.owner.login === this.login && b.owner.login !== this.login) {
          return -1;
        }
        if (a.owner.login !== this.login && b.owner.login === this.login) {
          return 1;
        }
        return 0;
      })
      .slice(0, this.SEARCH_RESULT_COUNT);
  }

  fetchRepos = flow(function* (
    this: StarredOrWatchedRepositoryStore,
    user: User,
  ) {
    this.login = user.login;
    this.repos = [];
    this.state = 'loading';

    const getReposRequest = (endpoint: string) =>
      oauth2Axios
        .get<RepositoryInfos>(user.url + endpoint)
        .then(({ data }) => data);

    try {
      this.repos = yield Promise.all([
        getReposRequest('/starred'), // Sort by latest
        getReposRequest('/subscriptions'), // Sort by oldest
      ]).then(([starredRefos, watchedRefos]) => {
        return [...starredRefos, ...watchedRefos.reverse()].filter(
          (v, i, a) => a.findIndex((t) => t.id === v.id) === i, // deduplicate
        );
      });
      this.state = 'done';
    } catch (error) {
      console.error(error);
      this.state = 'error';
    }
  });
}