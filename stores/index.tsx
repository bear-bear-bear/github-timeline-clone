import { createContext } from 'react';
import type { FC } from 'react';
import MyRepositoryStore from './MyRepository';

export class RootStore {
  myRepository;

  constructor() {
    this.myRepository = new MyRepositoryStore(this);
  }
}
export const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);
export const StoreProvider: FC = ({ children }) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);
