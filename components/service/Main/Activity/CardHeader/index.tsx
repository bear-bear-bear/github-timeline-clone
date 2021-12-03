import type { OthersEvent } from '@typings/oauth';
import { github } from '@lib/oauth';
import { observer } from 'mobx-react-lite';
import * as S from './styles';

const getActivityPredicate = (
  activity: OthersEvent,
  cardCount: number,
): JSX.Element => {
  const predicateMap = {
    WatchEvent: {
      single: (
        <>
          <span>starred</span>
          <a href={`${github.HOST}/${activity.repo.name}`}>
            {activity.repo.name}
          </a>
        </>
      ),
      multi: (
        <>
          <span>starred {cardCount} repositories</span>
        </>
      ),
    },
    CreateEvent: {
      single: (
        <>
          <span>created a repository</span>
          <a href={`${github.HOST}/${activity.repo.name}`}>
            {activity.repo.name}
          </a>
        </>
      ),
      multi: (
        <>
          <span>created {cardCount} repositories</span>
        </>
      ),
    },
  };

  if (!Object.keys(predicateMap).includes(activity.type)) {
    console.error('헤더 컴포넌트에 등록되지 않은 activity type 입니다.');
  }

  const isMulti = cardCount > 1;
  return predicateMap[activity.type as keyof typeof predicateMap][
    isMulti ? 'multi' : 'single'
  ];
};

type CardHeaderProps = {
  activity: OthersEvent;
  cardCount: number;
};

const CardHeader = observer<CardHeaderProps>(({ activity, cardCount = 1 }) => (
  <S.Sentence>
    <a href={`${github.HOST}/${activity.actor.login}`}>
      {activity.actor.login}
    </a>
    {getActivityPredicate(activity, cardCount)}
  </S.Sentence>
));

export default CardHeader;
