import { useEffect } from 'react';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';
import useStore from '@hooks/useStore';
import useUser from '@hooks/useUser';
import useToken from '@hooks/useToken';
import MoreButton from './MoreButton';
import CardHeaderSentence from './CardHeaderSentence';
import { MultiCard, SingleCard } from './Card';
import TipSection from './TipSection';
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
    return (
      <S.CatLoading>
        <Image
          src="/mona-loading-dark.gif"
          alt="cat loading"
          width="48px"
          height="48px"
        />
        One moment please...
      </S.CatLoading>
    );
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
      <TipSection />
    </S.Activity>
  );
});

export default Activity;
