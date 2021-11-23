import type { FC } from 'react';
import * as S from './styles';

const Container: FC = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
