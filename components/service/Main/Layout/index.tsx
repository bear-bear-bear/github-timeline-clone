import { observer } from 'mobx-react-lite';
import * as S from './styles';

const Container = observer(({ children }) => {
  return <S.Container>{children}</S.Container>;
});

const LeftSection = observer(({ children }) => {
  return <S.LeftSection>{children}</S.LeftSection>;
});

const LeftSectionStickyWrapper = observer(({ children }) => {
  return <S.LeftSectionStickyWrapper>{children}</S.LeftSectionStickyWrapper>;
});

const CenterSection = observer(({ children }) => {
  return <S.CenterSection>{children}</S.CenterSection>;
});

const RightSection = observer(({ children }) => {
  return <S.RightSection>{children}</S.RightSection>;
});

const Layout = {
  Container,
  LeftSection,
  LeftSectionStickyWrapper,
  CenterSection,
  RightSection,
};

export default Layout;
