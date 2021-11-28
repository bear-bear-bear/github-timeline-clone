import type { FC, MouseEvent } from 'react';
import type { StyledComponent } from '@emotion/styled';
import type { Theme } from '@emotion/react';
import { observer } from 'mobx-react-lite';
import * as S from './styles';

const LeftSectionStickyWrapper: FC = ({ children }) => {
  const handleScroll = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <S.MainLeftSectionStickyWrapper onScroll={handleScroll}>
      {children}
    </S.MainLeftSectionStickyWrapper>
  );
};

const withObserver = (Component: FC | StyledComponent<{ theme?: Theme }>) => {
  return observer(({ children }) => {
    return <Component>{children}</Component>;
  });
};

export const AppContainer = withObserver(S.AppContainer);

export const HeaderLayout = {
  Container: withObserver(S.HeaderContainer),
  DesktopWrapper: withObserver(S.DesktopHeaderWrapper),
  MobileWrapper: withObserver(S.MobileHeaderWrapper),
};

export const MainLayout = {
  Container: withObserver(S.MainContainer),
  LeftSection: withObserver(S.MainLeftSection),
  LeftSectionStickyWrapper: withObserver(LeftSectionStickyWrapper),
  CenterSection: withObserver(S.MainCenterSection),
  RightSection: withObserver(S.MainRightSection),
};
