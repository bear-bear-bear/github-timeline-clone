import styled from '@emotion/styled';
import type { Props } from './index';

export const DefaultTitle = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.color['gray-2']};
  letter-spacing: 0.5px;
`;

export const Box = styled.div<Pick<Props, 'boxStyle'>>`
  border: 1px solid ${({ theme }) => theme.color['gray-7']};
  border-radius: 6px;
  margin-top: 8px;

  ${({ boxStyle }) => boxStyle}
`;
