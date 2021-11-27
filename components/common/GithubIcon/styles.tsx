import styled from '@emotion/styled';
import { AiFillGithub } from 'react-icons/ai';
import type { Props } from './index';

export const GithubIcon = styled(AiFillGithub)<Props>`
  color: ${({ color, theme }) => color || theme.color['gray-2']};
  font-size: ${({ size }) => size || '3rem'};
`;
