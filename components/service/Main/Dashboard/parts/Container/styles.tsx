import styled from '@emotion/styled';
import type { Props } from './index';

export const Box = styled.div<Pick<Props, 'boxStyle'>>`
  border: 1px solid ${({ theme }) => theme.color['gray-7']};
  border-radius: 6px;
  margin-top: 8px;

  ${({ boxStyle }) => boxStyle}
`;
