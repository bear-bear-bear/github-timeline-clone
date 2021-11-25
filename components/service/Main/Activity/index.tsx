import { observer } from 'mobx-react-lite';
import * as S from './styles';

const Activity = observer(() => {
  return (
    <S.Activity>
      <S.TempList>가운데</S.TempList>
    </S.Activity>
  );
});

export default Activity;
