import type { CSSProperties, DOMAttributes } from 'react';
import { observer } from 'mobx-react-lite';
import * as S from './styles';
import { User } from '@typings/oauth';

export interface Props extends DOMAttributes<HTMLImageElement> {
  avatarUrl: User['avatar_url'];
  size?: CSSProperties['width'];
}

const Avatar = observer<Props>(({ avatarUrl, size, ...rest }) => {
  return <S.Avatar src={avatarUrl} alt="avatar" size={size} {...rest} />;
});

export default Avatar;
