import type { FC } from 'react';
import type { StyledComponent } from '@emotion/styled';
import type { Theme } from '@emotion/react';
import { observer } from 'mobx-react-lite';
import * as S from './styles';

const withObserver = (Component: FC | StyledComponent<{ theme?: Theme }>) => {
  return observer(({ children }) => {
    return <Component>{children}</Component>;
  });
};

const Layout = {
  Container: withObserver(S.Container),
  LeftSection: withObserver(S.LeftSection),
  LeftSectionStickyWrapper: withObserver(S.LeftSectionStickyWrapper),
  CenterSection: withObserver(S.CenterSection),
  RightSection: withObserver(S.RightSection),
};

export default Layout;
