import { observer } from 'mobx-react-lite';
import useStore from '@hooks/useStore';
import SearchResultItem from '../SearchResultItem';
import * as S from './styles';
import Loading from '@components/common/Loading';
import { useTheme } from '@emotion/react';

type Props = {
  searchWord: string;
};

const SearchResultItems = observer(({ searchWord }: Props) => {
  const { myRepository } = useStore();

  return (
    <>
      {!searchWord &&
        myRepository.recentRepos.map((repo) => (
          <SearchResultItem.Repository item={repo} key={repo.html_url} />
        ))}
      {searchWord && (
        <>
          <SearchResultItem.Top searchWord={searchWord} />
          {myRepository.findRepos(searchWord).map((repo) => (
            <SearchResultItem.Repository item={repo} key={repo.html_url} />
          ))}
        </>
      )}
    </>
  );
});

const SearchResultList = observer((props: Props) => {
  const { myRepository } = useStore();
  const theme = useTheme();

  return (
    <S.SearchList>
      {myRepository.isNotFetched && (
        <S.LoadingWrapper>
          <Loading size="1.66rem" />
        </S.LoadingWrapper>
      )}
      {myRepository.state === 'done' && <SearchResultItems {...props} />}
    </S.SearchList>
  );
});

export default SearchResultList;
