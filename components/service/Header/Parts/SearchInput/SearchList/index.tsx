import SearchItem from '../SearchItem';
import { RepositoryInfo } from '@lib/oauth';
import * as S from './styles';

type Props = {
  items: RepositoryInfo[];
  searchWord: string;
};

const SearchList = ({ items, searchWord }: Props) => {
  return (
    <S.SearchList>
      <SearchItem.TopItem searchWord={searchWord} />
      {items.map((item) => (
        <SearchItem.RepositoryItem item={item} key={item.html_url} />
      ))}
    </S.SearchList>
  );
};

export default SearchList;
