import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { OthersEvent } from '@typings/oauth';
import CardHeader from '../CardHeader';
import CardContent from '../CardContent';
import * as S from './styles';

dayjs.extend(relativeTime);

type SingleCardProps = {
  activity: OthersEvent;
};
export const SingleCard = observer<SingleCardProps>(({ activity }) => (
  <S.Card>
    <a href={activity.actor.login}>
      <S.Avatar size="32px" avatarUrl={activity.actor.avatar_url} />
    </a>
    <S.Content>
      <CardHeader activity={activity} cardCount={1} />
      <S.Ago title={new Date(activity.created_at).toLocaleString('ko-KR')}>
        {dayjs(activity.created_at)
          .fromNow()
          .replaceAll('a day ago', 'yesterday')}
      </S.Ago>
      <S.Box>
        <CardContent.Repository activity={activity} />
      </S.Box>
    </S.Content>
  </S.Card>
));

type MultiCardProps = {
  activities: OthersEvent[];
};
export const MultiCard = observer<MultiCardProps>(({ activities }) => {
  const [isFold, setFold] = useState<boolean>(true);

  const handleFoldIconClick = () => {
    setFold((prev) => !prev);
  };

  return (
    <S.Card>
      <a href={activities[0].actor.login}>
        <S.Avatar size="32px" avatarUrl={activities[0].actor.avatar_url} />
      </a>
      <S.Content>
        <S.Header>
          <div>
            <CardHeader
              activity={activities[0]}
              cardCount={activities.length}
            />
            <S.Ago
              title={new Date(activities[0].created_at).toLocaleString('ko-KR')}
            >
              {dayjs(activities[0].created_at)
                .fromNow()
                .replaceAll('a day ago', 'yesterday')}
            </S.Ago>
          </div>
          {isFold ? (
            <S.UnFoldIcon onClick={handleFoldIconClick} />
          ) : (
            <S.FoldIcon onClick={handleFoldIconClick} />
          )}
        </S.Header>
        {activities.map((activity, i) => {
          const isFirstActivity = i === 0;
          return (
            <S.Box key={activity.id} isHide={isFold && !isFirstActivity}>
              <CardContent.Repository activity={activity} />
            </S.Box>
          );
        })}
      </S.Content>
    </S.Card>
  );
});
