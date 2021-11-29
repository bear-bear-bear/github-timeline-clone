import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import useStore from '@hooks/useStore';
import Loading from '@components/common/Loading';
import Star from '@components/common/Star';
import Language from '@components/common/Language';
import type { Language as LanguageType } from '@lib/getLanguageColor';
import type { SearchedRepository } from '@typings/oauth';
import * as S from './styles';

type RepoItemProps = {
  repo: SearchedRepository;
};
const RepoItem = observer<RepoItemProps>(({ repo }) => (
  <S.Item>
    <a href={repo.html_url}>{repo.full_name}</a>
    {repo.description && <p>{repo.description}</p>}
    <section>
      <Language language={repo.language as LanguageType} />
      <Star stargazersCount={repo.stargazers_count} />
    </section>
  </S.Item>
));

const ExploreRepositories = observer(() => {
  const { hotRepository } = useStore();

  useEffect(() => {
    if (hotRepository.isNotFetched) {
      hotRepository.fetchRepos();
    }
  });

  if (hotRepository.isNotFetched) return <Loading size="32px" withWrapper />;
  return (
    <S.Container>
      <S.Title>Explore repositories</S.Title>
      {hotRepository.hottestRepos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </S.Container>
  );
});

export default ExploreRepositories;
