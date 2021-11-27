import { ChangeEvent, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import useUser from '@hooks/useUser';
import useStore from '@hooks/useStore';
import Article from '@components/common/Article';
import Avatar from '@components/common/Avatar';
import Loading from '@components/common/Loading';
import type { RepositoryInfo } from '@typings/oauth';
import * as S from './styles';

type RepoItemProps = {
  repo: RepositoryInfo;
};
const RepoItem = observer(({ repo }: RepoItemProps) => (
  <S.ItemLink href={repo.html_url}>
    <Avatar avatarUrl={repo.owner.avatar_url} />
    <p>{repo.full_name}</p>
  </S.ItemLink>
));

type RepoListProps = {
  searchWord: string;
};
const RepoList = observer<RepoListProps>(({ searchWord }) => {
  const { myRepository } = useStore();

  const shownData = searchWord
    ? myRepository.findRepos(searchWord)
    : myRepository.recentRepos;

  return (
    <S.List>
      {shownData.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </S.List>
  );
});

const Repositories = observer(() => {
  const user = useUser();
  const { myRepository } = useStore();
  const [searchWord, setSearchWord] = useState<string>('');

  const showMore = () => {
    myRepository.showMoreRepo = true;
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    if (myRepository.isNotFetched) {
      myRepository.fetchRepos(user);
    }
  });

  if (myRepository.isNotFetched) return <Loading />;
  return (
    <S.Repositories>
      <Article title="Repositories">
        <S.SearchInput onFocus={showMore} onChange={handleSearch} />
        <RepoList searchWord={searchWord} />
        {!myRepository.showMoreRepo && (
          <S.ShowMoreButton onClick={showMore}>Show more</S.ShowMoreButton>
        )}
      </Article>
    </S.Repositories>
  );
});

export default Repositories;
