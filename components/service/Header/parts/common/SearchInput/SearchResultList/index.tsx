import type { HTMLAttributes } from 'react';
import { observer } from 'mobx-react-lite';
import useStore from '@hooks/useStore';
import Loading from '@components/common/Loading';
import SearchResultItem from '../SearchResultItem';
import * as S from './styles';

interface Props extends HTMLAttributes<HTMLUListElement> {
  searchWord: string;
}

const SearchResultItems = observer(
  ({ searchWord }: Pick<Props, 'searchWord'>) => {
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
  },
);

const SearchResultList = observer(({ searchWord, ...rest }: Props) => {
  const { starredOrSubscribedRepository } = useStore();

  return (
    <S.SearchList {...rest}>
      {starredOrSubscribedRepository.isNotFetched && (
        <S.LoadingWrapper>
          <Loading size="1.66rem" />
        </S.LoadingWrapper>
      )}
      {starredOrSubscribedRepository.state === 'done' && (
        <SearchResultItems searchWord={searchWord} />
      )}
    </S.SearchList>
  );
});

export default SearchResultList;
