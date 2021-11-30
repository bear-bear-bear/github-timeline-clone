import { observer } from 'mobx-react-lite';
import { github } from '@lib/oauth';
import Language from '@components/common/Language';
import Star from '@components/common/Star';
import ToggleButton, { Method } from '../ToggleButton';
import type { OthersEvent } from '@typings/oauth';
import * as S from './styles';

type Props = {
  activity: OthersEvent;
};

export const RepositoryContent = observer<Props>(({ activity }) => {
  const { repo } = activity;

  const starAPIUrl = `${github.API_HOST}/user/starred/${repo.full_name}`;
  const updatedAt = repo.updated_at || repo.created_at;

  return (
    <S.Wrapper>
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
      <S.Name>
        <S.Link href={repo.html_url}>{repo.full_name || repo.name}</S.Link>
      </S.Name>
      {repo.description && (
        <S.LinkifyDescription tagName="p">
          {repo.description}
        </S.LinkifyDescription>
      )}
      <S.BottomSection>
        {repo.language && <Language language={repo.language} />}
        {repo.stargazers_count > 0 && (
          <Star stargazersCount={repo.stargazers_count} />
        )}
        <S.UpdatedDate>
          {updatedAt &&
            new Date(updatedAt).toString().split(' ').slice(1, 3).join(' ')}
        </S.UpdatedDate>
      </S.BottomSection>
    </S.Wrapper>
  );
});
