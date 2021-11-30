import { useContext } from 'react';
import { TokenContext } from '@pages/index';

export default function useToken(): string {
  return useContext(TokenContext);
}
