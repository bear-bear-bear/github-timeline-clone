import type { Props } from './index';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ImSpinner2 } from 'react-icons/im';

type StyleProps = Pick<Props, 'fullWidth'>;

export const ButtonLink = styled.a<StyleProps>`
  display: flex;
  gap: 0.33rem;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  background-color: ${({ theme }) => theme.color.buttonBgColor};
  color: ${({ theme }) => theme.color.buttonTextColor};
  font-weight: 500;
  letter-spacing: 0.2px;
  border-radius: 6px;
`;

const loadingAnimation = keyframes`
  ${'0%'} {
    transform: rotateZ(0);
  }

  ${'50%'} {
    transform: rotateZ(360deg);
  }

  ${'100%'} {
    transform: rotateZ(1080deg);
  }
`;

export const Loading = styled(ImSpinner2)`
  will-change: transform;
  animation: ${loadingAnimation} 1.5s ease-in infinite;
`;
