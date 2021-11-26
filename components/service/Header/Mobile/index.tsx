import { observer } from 'mobx-react-lite';
import HeaderWrapper from '../parts/common/HeaderWrapper';
import * as S from './styles';

const MobileHeader = observer(() => {
  return (
    <HeaderWrapper>
      <S.MobileHeader>모바일 헤더</S.MobileHeader>
    </HeaderWrapper>
  );
});

export default MobileHeader;
