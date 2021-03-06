import styled from '@emotion/styled';
import type { Props } from './index';
import { keyframes } from '@emotion/react';
import { ImSpinner2 } from 'react-icons/im';

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

export const Loading = styled(ImSpinner2)<Props>`
  color: ${({ color, theme }) => color || theme.color['gray-5']};
  font-size: ${({ size }) => size || '1rem'};
  will-change: transform;
  animation: ${loadingAnimation} 1.5s ease-in infinite;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
  min-width: 350px;
`;
