import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { Props } from './index';

const sizeStyle = ({ size }: Props) => {
  if (!size) {
    return css`
      width: 15px;
      height: 15px;
    `;
  }
  return css`
    width: ${size};
    height: ${size};
  `;
};

export const Avatar = styled.div<Props>`
  border-radius: 50%;
  background: ${({ avatarUrl }) =>
    `url(${avatarUrl}) center/contain no-repeat`};

  ${sizeStyle}
`;
