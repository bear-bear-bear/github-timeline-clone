import { observer } from 'mobx-react-lite';
import * as S from './styles';

const Activity = observer(() => {
  return (
    <S.Activity>
      <S.Title>All activity</S.Title>
    </S.Activity>
  );
});

export default Activity;
