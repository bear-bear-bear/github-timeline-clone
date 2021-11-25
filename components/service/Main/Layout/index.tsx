import { observer } from 'mobx-react-lite';
import * as S from './styles';

const CenterSection = observer(({ children }) => {
  return <S.CenterSection>{children}</S.CenterSection>;
});

const Container = observer(({ children }) => {
  return <S.Layout>{children}</S.Layout>;
});

const Layout = {
  CenterSection,
  Container,
};

export default Layout;
