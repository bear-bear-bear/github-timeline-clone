import { useCallback, useState } from 'react';
import Icon from './Icon';
import * as S from './styles';

const SearchInput = () => {
  const [isInputFocus, setIsInputFocus] = useState<boolean>(true);

  const toggleInputFocusState = useCallback(() => {
    setIsInputFocus((prev) => !prev);
  }, []);

  return (
    <S.Label>
      <S.Input
        placeholder="Search or jump to…"
        onFocus={toggleInputFocusState}
        onBlur={toggleInputFocusState}
      />
      {isInputFocus && <Icon />}
    </S.Label>
  );
};

export default SearchInput;
