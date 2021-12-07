import type { HTMLAttributes } from 'react';
import { observer } from 'mobx-react-lite';
import useStore from '@hooks/useStore';
import Loading from '@components/common/Loading';
import SearchResultItem from '../SearchResultItem';
import * as S from './styles';

const SearchResultItems = observer(() => {
  const { starredOrSubscribedRepository } = useStore();

  return (
    <>
      {!starredOrSubscribedRepository.searchWord &&
        starredOrSubscribedRepository.recentRepos.map((repo) => (
          <SearchResultItem.Repository item={repo} key={repo.html_url} />
        ))}
      {starredOrSubscribedRepository.searchWord && (
        <>
          <SearchResultItem.Top />
          {starredOrSubscribedRepository.reposByCharTokens.map((repo) => (
            <SearchResultItem.Repository item={repo} key={repo.html_url} />
          ))}
        </>
      )}
    </>
  );
});

const SearchResultList = observer<HTMLAttributes<HTMLUListElement>>((props) => {
  const { starredOrSubscribedRepository } = useStore();

  return (
    <S.SearchList {...props}>
      {starredOrSubscribedRepository.isNotFetched && (
        <S.LoadingWrapper>
          <Loading size="1.66rem" />
        </S.LoadingWrapper>
      )}
      {starredOrSubscribedRepository.state === 'done' && <SearchResultItems />}
    </S.SearchList>
  );
});

export default SearchResultList;
