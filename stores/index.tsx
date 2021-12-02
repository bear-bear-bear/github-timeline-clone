import { createContext } from 'react';
import type { FC } from 'react';
import MyRepositoryStore from './MyRepository';
import StarredOrSubscribedRepositoryStore from './StarredOrSubscribedRepository';
import NotificationStateStore from './NotificationState';
import MyActivityStore from './MyActivity';
import HotRepositoryStore from './HotRepository';
import OthersActivityStore from './OthersActivity';

export class RootStore {
  myRepository;
  starredOrSubscribedRepository;
  notificationState;
  myActivity;
  hotRepository;
  othersActivity;

  constructor() {
    this.myRepository = new MyRepositoryStore(this);
    this.starredOrSubscribedRepository = new StarredOrSubscribedRepositoryStore(
      this,
    );
    this.notificationState = new NotificationStateStore(this);
    this.myActivity = new MyActivityStore(this);
    this.hotRepository = new HotRepositoryStore(this);
    this.othersActivity = new OthersActivityStore(this);
  }
}
export const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);
export const StoreProvider: FC = ({ children }) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);
