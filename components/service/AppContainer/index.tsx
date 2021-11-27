import * as S from './styles';
import { observer } from 'mobx-react-lite';

const AppContainer = observer(({ children }) => {
  return <S.AppContainer>{children}</S.AppContainer>;
});

export default AppContainer;
