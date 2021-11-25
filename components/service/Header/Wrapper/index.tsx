import { observer } from 'mobx-react-lite';
import * as S from './styles';

const HeaderWrapper = observer(({ children }) => {
  return <S.HeaderWrapper>{children}</S.HeaderWrapper>;
});

export default HeaderWrapper;
