import type { PassedEventType } from '@stores/OthersActivity';
import type { OthersEvent } from '@typings/oauth';
import { github } from '@lib/oauth';
import { observer } from 'mobx-react-lite';
import * as S from './styles';

export const singleCardActionText = {
  WatchEvent: 'starred',
  CreateEvent: 'created a repository',
};

export const multiCardActionText = (actionCount: number) => ({
  WatchEvent: `starred ${actionCount} repositories`,
  CreateEvent: `created ${actionCount} repositories`,
});

type CardHeaderSentenceProps = {
  activity: OthersEvent;
  cardCount: number;
};

const CardHeaderSentence = observer<CardHeaderSentenceProps>(
  ({ cardCount, activity }) => (
    <S.Sentence>
      <a href={`${github.HOST}/${activity.actor.login}`}>
        {activity.actor.login}
      </a>
      <span>
        {cardCount === 1
          ? singleCardActionText[activity.type as PassedEventType]
          : multiCardActionText(cardCount)[activity.type as PassedEventType]}
      </span>
      {activity.repo && (
        <a href={`${github.HOST}/${activity.repo.name}`}>
          {activity.repo.name}
        </a>
      )}
    </S.Sentence>
  ),
);

export default CardHeaderSentence;
