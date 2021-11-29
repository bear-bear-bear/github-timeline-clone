import { observer } from 'mobx-react-lite';
import * as S from './styles';

type Props = {
  stargazersCount: number;
};

function kFormatter(num: number) {
  return num > 999 ? (num / 1000).toFixed(1) + 'k' : num;
}

const Star = observer<Props>(({ stargazersCount }) => {
  return (
    <S.InlineWrapper>
      <S.Star />
      {kFormatter(stargazersCount)}
    </S.InlineWrapper>
  );
});

export default Star;
