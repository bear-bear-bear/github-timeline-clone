import { observer } from 'mobx-react-lite';
import { SerializedStyles } from '@emotion/utils';
import * as S from './styles';

export interface Props {
  label: string | React.FC;
  boxStyle?: SerializedStyles | ((prop: any) => SerializedStyles);
}

const ArticleBox = observer<Props>(({ children, label, boxStyle }) => {
  return (
    <article>
      {typeof label === 'string' && <S.DefaultTitle>{label}</S.DefaultTitle>}
      {typeof label === 'function' && label}

      <S.Box boxStyle={boxStyle}>{children}</S.Box>
    </article>
  );
});

export default ArticleBox;
