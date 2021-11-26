import { observer } from 'mobx-react-lite';
import useStore from '@hooks/useStore';
import Loading from '@components/common/Loading';
import SearchResultItem from '../SearchResultItem';
import * as S from './styles';

type Props = {
  searchWord: string;
};

const SearchResultItems = observer(({ searchWord }: Props) => {
  const { starredOrWatchedRepository } = useStore();

  return (
    <>
      {!searchWord &&
        starredOrWatchedRepository.recentRepos.map((repo) => (
          <SearchResultItem.Repository item={repo} key={repo.html_url} />
        ))}
      {searchWord && (
        <>
          <SearchResultItem.Top searchWord={searchWord} />
          {starredOrWatchedRepository
            .findReposByCharTokens(searchWord)
            .map((repo) => (
              <SearchResultItem.Repository item={repo} key={repo.html_url} />
            ))}
        </>
      )}
    </>
  );
});

const SearchResultList = observer((props: Props) => {
  const { starredOrWatchedRepository } = useStore();

  return (
    <S.SearchList>
      {starredOrWatchedRepository.isNotFetched && (
        <S.LoadingWrapper>
          <Loading size="1.66rem" />
        </S.LoadingWrapper>
      )}
      {starredOrWatchedRepository.state === 'done' && (
        <SearchResultItems {...props} />
      )}
    </S.SearchList>
  );
});

export default SearchResultList;
