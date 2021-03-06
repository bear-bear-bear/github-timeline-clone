import { ChangeEvent, FocusEvent, useCallback, useState } from 'react';
import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import useStore from '@hooks/useStore';
import useUser from '@hooks/useUser';
import Icon from './Icon';
import SearchResultList from './SearchResultList';
import * as S from './styles';

const SearchInput = observer(() => {
  const user = useUser();
  const { starredOrSubscribedRepository } = useStore();
  const [isInputSpread, setIsInputSpread] = useState(false);
  const [isMouseOnResultList, setIsMouseOnResultList] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    runInAction(
      () => (starredOrSubscribedRepository.searchWord = e.target.value),
    );
  };

  const handleInputClick = async () => {
    if (starredOrSubscribedRepository.state === 'init') {
      await starredOrSubscribedRepository.fetchRepos(user);
    }
  };

  const handleInputFocus = useCallback(() => {
    setIsInputSpread(true);
  }, []);

  const handleInputBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      if (isMouseOnResultList) {
        e.currentTarget.focus();
        return;
      }

      setIsInputSpread(false);
    },
    [isMouseOnResultList],
  );

  const toggleResultListHoverState = useCallback(() => {
    setIsMouseOnResultList((prev) => !prev);
  }, []);

  return (
    <S.Container>
      <S.Label>
        <S.Input
          placeholder="Search or jump to…"
          isSpread={isInputSpread}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          onClick={handleInputClick}
          value={starredOrSubscribedRepository.searchWord}
        />
        {!isInputSpread && <Icon.KeySlash />}
      </S.Label>
      {isInputSpread && (
        <SearchResultList
          onMouseEnter={toggleResultListHoverState}
          onMouseLeave={toggleResultListHoverState}
        />
      )}
    </S.Container>
  );
});

export default SearchInput;
