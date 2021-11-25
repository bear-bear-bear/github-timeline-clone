import { ChangeEvent, useCallback, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { github } from '@lib/oauth';
import type { RepositoryInfo } from '@typings/oauth';
import Icon from './Icon';
import SearchResultList from './SearchList';
import * as S from './styles';

const SearchInput = observer(() => {
  const [searchResultItems, setSearchResultItems] = useState<RepositoryInfo[]>(
    [],
  );
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const [searchWord, setSearchWord] = useState<string>('');

  const handleSearch = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    const searchWord = e.target.value;
    setSearchWord(searchWord);

    if (!searchWord) {
      setSearchResultItems([]);
      return;
    }

    try {
      const items = await github.SEARCH_REPOSITORY_REQUEST(
        searchWord,
        'bear-bear-bear',
      );
      setSearchResultItems(items);
      console.log(items);
      // TODO: 검색 디바운싱 적용
      // TODO: searchResultItems 디폴트 값에 현재 유저의 레포지토리 최근 순으로 6개 띄우기 (전역 저장소 활용)
      // TODO: 검색 시 전역 저장소에 있는 현재 유저의 레포지토리 목록 중 검색어를 포함하는 레포지토리 띄우기
    } catch (err) {
      setSearchResultItems([]);
      console.error(err);
    }
  }, []);

  const toggleInputFocusState = useCallback(() => {
    setIsInputFocus((prev) => !prev);
  }, []);

  return (
    <S.Container>
      <S.Label>
        <S.Input
          placeholder="Search or jump to…"
          onFocus={toggleInputFocusState}
          onBlur={toggleInputFocusState}
          onChange={handleSearch}
          value={searchWord}
        />
        {!isInputFocus && <Icon.KeySlash />}
      </S.Label>
      {/*<SearchResultList items={searchResultItems} searchWord={searchWord} />*/}
      {isInputFocus && searchWord && (
        <SearchResultList items={searchResultItems} searchWord={searchWord} />
      )}
    </S.Container>
  );
});

export default SearchInput;
