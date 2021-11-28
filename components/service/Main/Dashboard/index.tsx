import { observer } from 'mobx-react-lite';
import Repositories from './Repositories';
import RecentActivity from './RecentActivity';

const Dashboard = observer(() => {
  return (
    <aside>
      <Repositories />
      <RecentActivity />
    </aside>
  );
});

export default Dashboard;
