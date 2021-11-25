import { observer } from 'mobx-react-lite';
import parts from '../parts';
import * as S from './styles';

const MobileHeader = observer(() => {
  return (
    <parts.HeaderWrapper>
      <S.MobileHeader>모바일 헤더</S.MobileHeader>
    </parts.HeaderWrapper>
  );
});

export default MobileHeader;
