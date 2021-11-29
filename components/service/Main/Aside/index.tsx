import { observer } from 'mobx-react-lite';
import ExploreRepositories from './ExploreRepositories';

const Aside = observer(() => {
  return (
    <aside>
      <ExploreRepositories />
    </aside>
  );
});

export default Aside;
