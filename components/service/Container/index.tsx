import * as S from './styles';
import { observer } from 'mobx-react-lite';

const Container = observer(({ children }) => {
  return <S.Container>{children}</S.Container>;
});

export default Container;
