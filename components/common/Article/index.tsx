import { observer } from 'mobx-react-lite';
import * as S from './styles';

type Props = {
  title: string | React.FC;
};

const Article = observer<Props>(({ children, title }) => {
  return (
    <div>
      {typeof title === 'string' && <S.DefaultTitle>{title}</S.DefaultTitle>}
      {typeof title === 'function' && title}

      <S.Box>{children}</S.Box>
    </div>
  );
});

export default Article;
