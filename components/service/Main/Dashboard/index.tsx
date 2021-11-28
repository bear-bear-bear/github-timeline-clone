import { observer } from 'mobx-react-lite';
import Repositories from './Repositories';
import RecentActivity from './RecentActivity';

const Dashboard = observer(() => {
  return (
    <article>
      <Repositories />
      <RecentActivity />
    </article>
  );
});

export default Dashboard;
