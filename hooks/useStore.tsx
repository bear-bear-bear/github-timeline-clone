import { useContext } from 'react';
import { RootStore, StoreContext } from '../stores';

export default function useStore(): RootStore {
  return useContext(StoreContext);
}
