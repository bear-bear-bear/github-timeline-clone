import { observer } from 'mobx-react-lite';
import { github } from '@lib/oauth';
import Language from '@components/common/Language';
import Star from '@components/common/Star';
import ToggleButton from '../ToggleButton';
import useIssueCount from './useIssueCount';
import type { OthersEvent } from '@typings/oauth';
import * as S from './styles';

type Props = {
  activity: OthersEvent;
};

const RepositoryContent = observer<Props>(({ activity }) => {
  const { repo } = activity;
  const starAPIUrl = `${github.API_HOST}/user/starred/${repo.full_name}`;
  const updatedAt = repo.updated_at || repo.created_at;
  let issueCount = 0;

  if (activity.type === 'ForkEvent') {
    issueCount = useIssueCount(activity);
  }

  return (
    <div>
      <ToggleButton
        api={{
          on: { method: 'put', url: starAPIUrl },
          off: { method: 'delete', url: starAPIUrl },
          stateDetermination: { method: 'get', url: starAPIUrl },
        }}
        word={{ on: 'Star', off: 'Unstar' }}
        Icon={{ on: <S.OutlineStarIcon />, off: <S.FillStarIcon /> }}
        target={repo.full_name || repo.name}
      />
      {activity.type === 'ForkEvent' && (
        <S.ForkedBySection>
          <span>Forked to</span>
          <a href={activity.payload.forkee?.html_url}>
            {activity.payload.forkee?.full_name}
          </a>
        </S.ForkedBySection>
      )}
      <div>
        <S.ActorLink href={repo.html_url}>
          {repo.full_name || repo.name}
        </S.ActorLink>
      </div>
      {repo.description && (
        <S.LinkifyDescription tagName="p">
          {repo.description}
        </S.LinkifyDescription>
      )}
      <S.BottomSection>
        {repo.language && <Language language={repo.language} />}
        {repo.stargazers_count > 0 && (
          <a href={repo.html_url + '/stargazers'}>
            <Star stargazersCount={repo.stargazers_count} />
          </a>
        )}
        {issueCount > 0 && (
          <a
            href={
              repo.html_url +
              `/issues?q=${encodeURIComponent(
                'label:"help wanted" is:open is:issue',
              )}`
            }
          >
            {issueCount} issues need help
          </a>
        )}
        {updatedAt && (
          <S.UpdatedDate>
            {new Date(updatedAt).toString().split(' ').slice(1, 3).join(' ')}
          </S.UpdatedDate>
        )}
      </S.BottomSection>
    </div>
  );
});

const CardContent = {
  Repository: RepositoryContent,
};

export default CardContent;
