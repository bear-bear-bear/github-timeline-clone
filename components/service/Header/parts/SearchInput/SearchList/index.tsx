import { observer } from 'mobx-react-lite';
import type { RepositoryInfo } from '@typings/oauth';
import SearchItem from '../SearchItem';
import * as S from './styles';

type Props = {
  items: RepositoryInfo[];
  searchWord: string;
};

const SearchList = observer(({ items, searchWord }: Props) => {
  return (
    <S.SearchList>
      {searchWord && <SearchItem.TopItem searchWord={searchWord} />}
      {items.map((item) => (
        <SearchItem.RepositoryItem item={item} key={item.html_url} />
      ))}
    </S.SearchList>
  );
});

export default SearchList;
