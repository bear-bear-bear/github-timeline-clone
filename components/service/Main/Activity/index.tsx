import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import useStore from '@hooks/useStore';
import useUser from '@hooks/useUser';
import useToken from '@hooks/useToken';
import Loading from '@components/common/Loading';
import MoreButton from './MoreButton';
import CardHeaderSentence from './CardHeaderSentence';
import { MultiCard, SingleCard } from '@components/service/Main/Activity/Card';
import * as S from './styles';

const Activity = observer(() => {
  const user = useUser();
  const { othersActivity } = useStore();
  const accessToken = useToken();

  useEffect(() => {
    if (othersActivity.initialFetchDone) return;
    (async () => {
      await othersActivity.fetchNextActivities(user, accessToken);
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
          return (
            <MultiCard
              activities={activity}
              HeaderSentence={
                <CardHeaderSentence
                  activity={activity[0]}
                  cardCount={activity.length}
                />
              }
              key={activity[0].id + activity[1]?.id}
            />
          );
        }
        return (
          <SingleCard
            activity={activity}
            HeaderSentence={
              <CardHeaderSentence activity={activity} cardCount={1} />
            }
            key={activity.id}
          />
        );
      })}
      <MoreButton />
    </S.Activity>
  );
});

export default Activity;
