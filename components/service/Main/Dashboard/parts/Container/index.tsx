import type { FC, HTMLAttributes } from 'react';
import { observer } from 'mobx-react-lite';
import { SerializedStyles } from '@emotion/utils';
import * as S from './styles';

export interface Props extends HTMLAttributes<HTMLElement> {
  BoxLabel: FC;
  boxStyle?: SerializedStyles | ((prop: any) => SerializedStyles);
}

const Container = observer<Props>(
  ({ children, BoxLabel, boxStyle, ...rest }) => {
    return (
      <article {...rest}>
        <BoxLabel />
        <S.Box boxStyle={boxStyle}>{children}</S.Box>
      </article>
    );
  },
);

export default Container;
