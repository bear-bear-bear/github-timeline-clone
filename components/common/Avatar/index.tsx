import type { CSSProperties } from 'react';
import { observer } from 'mobx-react-lite';
import * as S from './styles';
import { User } from '@typings/oauth';

export type Props = {
  avatarUrl: User['avatar_url'];
  size?: CSSProperties['width'];
};

const Avatar = observer<Props>((props) => {
  return <S.Avatar {...props} />;
});

export default Avatar;
