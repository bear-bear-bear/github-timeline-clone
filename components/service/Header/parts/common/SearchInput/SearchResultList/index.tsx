import { observer } from 'mobx-react-lite';
import useStore from '@hooks/useStore';
import Loading from '@components/common/Loading';
import SearchResultItem from '../SearchResultItem';
import * as S from './styles';

type Props = {
  searchWord: string;
};

const SearchResultItems = observer(({ searchWord }: Props) => {
  const { starredOrSubscribedRepository } = useStore();

  return (
    <>
      {!searchWord &&
        starredOrSubscribedRepository.recentRepos.map((repo) => (
          <SearchResultItem.Repository item={repo} key={repo.html_url} />
        ))}
      {searchWord && (
        <>
          <SearchResultItem.Top searchWord={searchWord} />
          {starredOrSubscribedRepository
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
  const { starredOrSubscribedRepository } = useStore();

  return (
    <S.SearchList>
      {starredOrSubscribedRepository.isNotFetched && (
        <S.LoadingWrapper>
          <Loading size="1.66rem" />
        </S.LoadingWrapper>
      )}
      {starredOrSubscribedRepository.state === 'done' && (
        <SearchResultItems {...props} />
      )}
    </S.SearchList>
  );
});

export default SearchResultList;
