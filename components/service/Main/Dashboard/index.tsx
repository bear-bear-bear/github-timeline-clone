import { observer } from 'mobx-react-lite';
import * as S from './styles';
import Repositories from '@components/service/Main/Dashboard/Repositories';

const Dashboard = observer(() => {
  return (
    <S.Dashboard>
      <Repositories />
    </S.Dashboard>
  );
});

export default Dashboard;
