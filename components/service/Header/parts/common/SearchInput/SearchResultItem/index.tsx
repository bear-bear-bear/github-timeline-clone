import { observer } from 'mobx-react-lite';
import type { SimpleRepository } from '@typings/oauth';
import { github } from '@lib/oauth';
import Icon from '../Icon';
import * as S from './styles';
import useStore from '@hooks/useStore';

const TopItem = observer(() => {
  const { starredOrSubscribedRepository } = useStore();

  return (
    <S.Item>
      <S.LinkWrapper
        href={`${github.HOST}/search?q=${encodeURIComponent(
          starredOrSubscribedRepository.searchWord,
        )}`}
        rel="noopener noreferrer"
      >
        <S.IconWrapper>
          <Icon.Search />
        </S.IconWrapper>
        <S.Name className="repository-item__name">
          {starredOrSubscribedRepository.searchWord}
        </S.Name>
        <S.Tooltip className="repository-item__tooltip" alwaysOn>
          All Github
        </S.Tooltip>
      </S.LinkWrapper>
    </S.Item>
  );
});

const RepositoryItem = observer(({ item }: { item: SimpleRepository }) => {
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
});

const SearchResultItem = {
  Top: TopItem,
  Repository: RepositoryItem,
};

export default SearchResultItem;
