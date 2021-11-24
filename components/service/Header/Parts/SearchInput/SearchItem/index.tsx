import type { RepositoryInfo } from '@lib/oauth';
import Icon from '../Icon';
import * as S from './styles';

type SearchInfo = {
  searchWord: string;
};

const TopItem = ({ searchWord }: SearchInfo) => {
  return (
    <S.Item>
      <S.LinkWrapper
        href={`https://github.com/search?q=${encodeURIComponent(searchWord)}`}
        rel="noopener noreferrer"
      >
        <S.IconWrapper>
          <Icon.Search />
        </S.IconWrapper>
        <S.Name className="repository-item__name">{searchWord}</S.Name>
        <S.Tooltip className="repository-item__tooltip" alwaysOn>
          All Github
        </S.Tooltip>
      </S.LinkWrapper>
    </S.Item>
  );
};

const RepositoryItem = ({ item }: { item: RepositoryInfo }) => {
  return (
    <S.Item>
      <S.LinkWrapper href={item.html_url} rel="noopener noreferrer">
        <S.IconWrapper>
          <Icon.Repository />
        </S.IconWrapper>
        <S.Name className="repository-item__name">{item.full_name}</S.Name>
        <S.Tooltip className="repository-item__tooltip">Jump to</S.Tooltip>
      </S.LinkWrapper>
    </S.Item>
  );
};

const SearchItem = {
  TopItem,
  RepositoryItem,
};

export default SearchItem;
