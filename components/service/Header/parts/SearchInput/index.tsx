import { ChangeEvent, useCallback, useState } from 'react';
import { observer } from 'mobx-react-lite';
import useStore from '@hooks/useStore';
import useUser from '@hooks/useUser';
import Icon from './Icon';
import SearchResultList from './SearchResultList';
import * as S from './styles';

const SearchInput = observer(() => {
  const user = useUser();
  const { myRepository } = useStore();
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const [searchWord, setSearchWord] = useState<string>('');

  // TODO: 검색 디바운싱 적용

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  }, []);

  const toggleInputFocusState = useCallback(() => {
    setIsInputFocus((prev) => !prev);
  }, []);

  const handleInputClick = async () => {
    console.log('click');
    if (myRepository.state === 'init') {
      console.log('fetch');
      await myRepository.fetchRepos(user.repos_url);
    }
  };

  return (
    <S.Container>
      <S.Label>
        <S.Input
          placeholder="Search or jump to…"
          onFocus={toggleInputFocusState}
          onBlur={toggleInputFocusState}
          onChange={handleInputChange}
          onClick={handleInputClick}
          value={searchWord}
        />
        {!isInputFocus && <Icon.KeySlash />}
      </S.Label>
      {isInputFocus && <SearchResultList searchWord={searchWord} />}
    </S.Container>
  );
});

export default SearchInput;
