import { flow, makeAutoObservable } from 'mobx';
import type { SimpleRepository, FetchState, User } from '@typings/oauth';
import oauth2Axios from '@lib/axios';
import type { RootStore } from './index';
import { github } from '@lib/oauth';

export default class StarredOrSubscribedRepositoryStore {
  rootStore;
  repos: SimpleRepository[] = [];
  state: FetchState = 'init';
  login: User['login'] = '';
  searchWord = '';
  SEARCH_RESULT_COUNT = 7;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get isNotFetched() {
    return this.state === 'init' || this.state === 'loading';
  }

  get recentRepos() {
    const MY_REPO_COUNT = 1;

    const myRepos = this.repos
      .filter((repo) => repo.owner.login === this.login)
      .slice(0, MY_REPO_COUNT);
    const othersRepos = this.repos
      .filter((repo) => repo.owner.login !== this.login)
      .slice(0, this.SEARCH_RESULT_COUNT - MY_REPO_COUNT);

    return [...myRepos, ...othersRepos];
  }

  get reposByCharTokens() {
    const charTokens = this.searchWord.split('').filter((v) => v !== ' ');

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
    this: StarredOrSubscribedRepositoryStore,
    user: User,
  ) {
    this.login = user.login;
    this.repos = [];
    this.state = 'loading';

    const getReposRequest = (endpoint: string) =>
      oauth2Axios
        .get<SimpleRepository[]>(github.API_HOST + endpoint)
        .then(({ data }) => data);

    const uniqueBy = <T extends { id: number }>(arr: T[]) => {
      return arr.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
    };

    try {
      this.repos = yield Promise.all([
        getReposRequest('/user/starred'),
        getReposRequest('/user/subscriptions'),
      ]).then(
        ([starredRepositoriesByLatest, subscribedRepositoriesByOldest]) => {
          return uniqueBy<SimpleRepository>([
            ...starredRepositoriesByLatest,
            ...subscribedRepositoriesByOldest.reverse(),
          ]);
        },
      );
      this.state = 'done';
    } catch (error) {
      console.error(error);
      this.state = 'error';
    }
  });
}
