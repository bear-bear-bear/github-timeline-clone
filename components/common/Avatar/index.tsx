import type { CSSProperties } from 'react';
import { observer } from 'mobx-react-lite';
import * as S from './styles';
import { User } from '@typings/oauth';

export type Props = {
  avatarUrl: User['avatar_url'];
  size?: CSSProperties['width'];
};

const Avatar = observer<Props>(({ avatarUrl, size }) => {
  return <S.Avatar src={avatarUrl} alt="avatar" size={size} />;
});

export default Avatar;
