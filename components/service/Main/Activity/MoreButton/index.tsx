import { observer } from 'mobx-react-lite';
import useUser from '@hooks/useUser';
import useStore from '@hooks/useStore';
import Loading from '@components/common/Loading';

const MoreButton = observer(() => {
  const user = useUser();
  const { othersActivity } = useStore();

  const handleClickMoreButton = async () => {
    await othersActivity.fetchNextActivities(user);
  };

  if (othersActivity.isFetchedAllData) return null;
  if (othersActivity.isNotFetched) {
    return <Loading size="32px" withWrapper />;
  }
  return <button onClick={handleClickMoreButton}>More</button>;
});

export default MoreButton;
