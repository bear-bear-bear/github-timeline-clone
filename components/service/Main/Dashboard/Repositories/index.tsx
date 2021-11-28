import { ChangeEvent, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import useStore from '@hooks/useStore';
import { github } from '@lib/oauth';
import Avatar from '@components/common/Avatar';
import Loading from '@components/common/Loading';
import { RepositoryIcon } from '@components/service/Header/parts/common/SearchInput/Icon';
import type { Repository } from '@typings/oauth';
import * as S from './styles';

type RepoItemProps = {
  repo: Repository;
};
const RepoItem = observer(({ repo }: RepoItemProps) => (
  <S.Item>
    <S.Link href={repo.html_url}>
      <Avatar avatarUrl={repo.owner.avatar_url} size="17px" />
    </S.Link>
    <S.Link href={repo.html_url}>
      <p>{repo.full_name}</p>
    </S.Link>
  </S.Item>
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

const BoxLabel = observer(() => (
  <S.BoxLabel>
    <h2>Repositories</h2>
    <S.TopButtonLink
      text="New"
      icon={<RepositoryIcon />}
      href={`${github.HOST}/new`}
    />
  </S.BoxLabel>
));

const Repositories = observer(() => {
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
      myRepository.fetchRepos();
    }
  });

  if (myRepository.isNotFetched) return <Loading />;
  return (
    <S.Repositories BoxLabel={BoxLabel} boxStyle={S.BoxStyle}>
      <S.SearchInput
        placeholder="Find a repository..."
        onFocus={showMore}
        onChange={handleSearch}
      />
      <RepoList searchWord={searchWord} />
      {!myRepository.showMoreRepo && (
        <S.ShowMoreButton onClick={showMore}>Show more</S.ShowMoreButton>
      )}
    </S.Repositories>
  );
});

export default Repositories;
