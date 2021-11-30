import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { Props } from './index';

const sizeStyle = ({ size }: Pick<Props, 'size'>) => {
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

export const Avatar = styled.img`
  border-radius: 50%;
  object-fit: contain;
  vertical-align: middle;

  ${sizeStyle}
`;
