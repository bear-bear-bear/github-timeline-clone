import { observer } from 'mobx-react-lite';
import useUser from '@hooks/useUser';
import useStore from '@hooks/useStore';
import useToken from '@hooks/useToken';
import * as S from './styles';
import { FormEventHandler } from 'react';

const MoreButton = observer(() => {
  const user = useUser();
  const accessToken = useToken();
  const { othersActivity } = useStore();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await othersActivity.fetchNextActivities(user, accessToken);
  };

  if (othersActivity.isFetchedAllData) return null;
  if (othersActivity.isNotFetched) {
    return <S.Button>Loading more...</S.Button>;
  }
  return (
    <form method="" action="" onSubmit={handleSubmit}>
      <S.Button type="submit">More</S.Button>
    </form>
  );
});

export default MoreButton;
