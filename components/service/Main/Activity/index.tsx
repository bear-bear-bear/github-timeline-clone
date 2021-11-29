import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import useStore from '@hooks/useStore';
import useUser from '@hooks/useUser';
import * as S from './styles';
import { OthersEvent } from '@typings/oauth';

type CardProps = {
  activity: OthersEvent;
};
const Card = observer<CardProps>(({ activity }) => {
  return (
    <div key={activity.id}>
      <p>{activity.actor.login}</p>
    </div>
  );
});
const TempCard = observer<CardProps>(({ activity }) => {
  return (
    <div key={activity.id}>
      <p style={{ fontWeight: 700 }}>{activity.actor.login}</p>
    </div>
  );
});

const Activity = observer(() => {
  const user = useUser();
  const { othersActivity } = useStore();

  useEffect(() => {
    if (!othersActivity.isNotFetched) return;
    (async () => {
      await othersActivity.fetchNextActivities(user);
    })();
  });

  if (othersActivity.isNotFetched) return <div>로딩중</div>;
  return (
    <S.Activity>
      <S.Title>All activity</S.Title>
      {othersActivity.processedActivities.map((activity) => {
        if (Array.isArray(activity)) {
          return (
            <>
              <hr />
              {activity.map((item) => (
                <TempCard activity={item} key={item.id} />
              ))}
              <hr />
            </>
          );
        }
        return <Card activity={activity} key={activity.id} />;
      })}
    </S.Activity>
  );
});

export default Activity;
