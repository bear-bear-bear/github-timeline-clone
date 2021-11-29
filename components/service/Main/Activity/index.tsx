import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import useStore from '@hooks/useStore';
import useUser from '@hooks/useUser';
import Loading from '@components/common/Loading';
import { OthersEvent } from '@typings/oauth';
import * as S from './styles';

type CardProps = {
  activity: OthersEvent;
};
const Card = observer<CardProps>(({ activity }) => {
  return (
    <div key={activity.id}>
      <p>{activity.actor.login + activity.id}</p>
    </div>
  );
});
const TempCard = observer<CardProps>(({ activity }) => {
  return (
    <div key={activity.id}>
      <p style={{ fontWeight: 700 }}>{activity.actor.login + activity.id}</p>
    </div>
  );
});

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

const Activity = observer(() => {
  const user = useUser();
  const { othersActivity } = useStore();

  useEffect(() => {
    if (othersActivity.initialFetchDone) return;
    (async () => {
      await othersActivity.fetchNextActivities(user);
    })();
  });

  if (!othersActivity.initialFetchDone) {
    return <Loading size="32px" withWrapper />;
  }
  return (
    <S.Activity>
      <S.Title>All activity</S.Title>
      {othersActivity.processedActivities.map((activity) => {
        if (Array.isArray(activity)) {
          return activity.map((item) => (
            <TempCard activity={item} key={item.id} />
          ));
        }
        return <Card activity={activity} key={activity.id} />;
      })}
      <MoreButton />
    </S.Activity>
  );
});

export default Activity;
