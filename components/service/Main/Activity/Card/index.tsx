import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { OthersEvent } from '@typings/oauth';
import { RepositoryContent } from '../CardContent';
import * as S from './styles';

dayjs.extend(relativeTime);

type SingleCardProps = {
  activity: OthersEvent;
  HeaderSentence: JSX.Element;
};
export const SingleCard = observer<SingleCardProps>(
  ({ activity, HeaderSentence }) => {
    return (
      <S.Card>
        <S.Avatar size="32px" avatarUrl={activity.actor.avatar_url} />
        <S.Content>
          {HeaderSentence}
          <S.Ago title={new Date(activity.created_at).toLocaleString('ko-KR')}>
            {dayjs(activity.created_at)
              .fromNow()
              .replaceAll('a day ago', 'yesterday')}
          </S.Ago>
          <S.Box>
            <RepositoryContent activity={activity} />
          </S.Box>
        </S.Content>
      </S.Card>
    );
  },
);

type MultiCardProps = {
  activities: OthersEvent[];
  HeaderSentence: JSX.Element;
};
export const MultiCard = observer<MultiCardProps>(
  ({ activities, HeaderSentence }) => {
    const [isFold, setFold] = useState<boolean>(true);

    const handleFoldIconClick = () => {
      setFold((prev) => !prev);
    };

    return (
      <S.Card>
        <S.Avatar size="32px" avatarUrl={activities[0].actor.avatar_url} />
        <S.Content>
          <S.Header>
            <div>
              {HeaderSentence}
              <S.Ago
                title={new Date(activities[0].created_at).toLocaleString(
                  'ko-KR',
                )}
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
            if (isFold && i > 0) return null;
            return (
              <S.Box key={activity.id}>
                <RepositoryContent activity={activity} />
              </S.Box>
            );
          })}
        </S.Content>
      </S.Card>
    );
  },
);
