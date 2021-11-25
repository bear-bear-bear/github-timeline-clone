import { observer } from 'mobx-react-lite';
import * as S from './styles';

const Dashboard = observer(() => {
  return (
    <S.Dashboard>
      <S.StickyWrapper>왼쪽</S.StickyWrapper>
    </S.Dashboard>
  );
});

export default Dashboard;
