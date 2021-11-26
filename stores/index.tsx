import { createContext } from 'react';
import type { FC } from 'react';
import MyRepositoryStore from './MyRepository';
import StarredOrWatchedRepositoryStore from './StarredOrWatchedRepository';
import NotificationStateStore from './NotificationState';

export class RootStore {
  myRepository;
  starredOrWatchedRepository;
  notificationState;

  constructor() {
    this.myRepository = new MyRepositoryStore(this);
    this.starredOrWatchedRepository = new StarredOrWatchedRepositoryStore(this);
    this.notificationState = new NotificationStateStore(this);
  }
}
export const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);
export const StoreProvider: FC = ({ children }) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);
