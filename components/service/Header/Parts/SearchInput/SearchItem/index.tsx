import type { RepositoryInfo } from '@lib/oauth';
import Icon from '../Icon';
import * as S from './styles';

type SearchInfo = {
  searchWord: string;
};

const TopItem = ({ searchWord }: SearchInfo) => {
  return (
    <S.SearchResultItem>
      <S.LinkWrapper
        href={`https://github.com/search?q=${encodeURIComponent(searchWord)}`}
        rel="noopener noreferrer"
      >
        <S.IconWrapper>
          <Icon.Search />
        </S.IconWrapper>
        <S.Content>{searchWord}</S.Content>
        <S.TooltipWrapper>
          <S.Tooltip>All Github</S.Tooltip>
        </S.TooltipWrapper>
      </S.LinkWrapper>
    </S.SearchResultItem>
  );
};

const RepositoryItem = ({ item }: { item: RepositoryInfo }) => {
  return (
    <S.SearchResultItem>
      <S.LinkWrapper href={item.html_url} rel="noopener noreferrer">
        <S.IconWrapper>
          <Icon.Repository />
        </S.IconWrapper>
        <S.Content>{item.full_name}</S.Content>
        <S.TooltipWrapper>
          <S.Tooltip>Jump to</S.Tooltip>
        </S.TooltipWrapper>
      </S.LinkWrapper>
    </S.SearchResultItem>
  );
};

const SearchItem = {
  TopItem,
  RepositoryItem,
};

export default SearchItem;
