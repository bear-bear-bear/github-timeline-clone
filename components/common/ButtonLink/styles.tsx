import type { Props } from './index';
import styled from '@emotion/styled';

type StyleProps = Pick<Props, 'fullWidth'>;

export const ButtonLink = styled.a<StyleProps>`
  display: flex;
  gap: 0.33rem;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  background-color: ${({ theme }) => theme.color['green-0']};
  color: ${({ theme }) => theme.color['gray-0']};
  font-weight: 500;
  letter-spacing: 0.2px;
  border-radius: 6px;
`;
