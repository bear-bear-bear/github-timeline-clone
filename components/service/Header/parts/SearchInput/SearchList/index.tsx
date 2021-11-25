import { observer } from 'mobx-react-lite';
import useStore from '@hooks/useStore';
import SearchItem from '../SearchItem';
import * as S from './styles';

type Props = {
  searchWord: string;
};

const SearchResultItems = observer(({ searchWord }: Props) => {
  const { myRepository } = useStore();

  return (
    <>
      {!searchWord &&
        myRepository.recentRepos.map((repo) => (
          <SearchItem.RepositoryItem item={repo} key={repo.html_url} />
        ))}
      {searchWord && (
        <>
          <SearchItem.TopItem searchWord={searchWord} />
          {myRepository.findRepos(searchWord).map((repo) => (
            <SearchItem.RepositoryItem item={repo} key={repo.html_url} />
          ))}
        </>
      )}
    </>
  );
});

const SearchResult = observer((props: Props) => {
  const { myRepository } = useStore();

  return (
    <S.SearchList>
      {myRepository.isNotFetched && <div>로딩 중</div>}
      {myRepository.state === 'done' && <SearchResultItems {...props} />}
    </S.SearchList>
  );
});

export default SearchResult;
