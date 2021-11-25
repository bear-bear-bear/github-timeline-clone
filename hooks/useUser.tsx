import { useContext } from 'react';
import { UserContext } from '@pages/index';
import type { User } from '@typings/oauth';

export default function useUser(): User {
  return useContext(UserContext);
}
