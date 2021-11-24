import styled from '@emotion/styled';
import { AiFillGithub } from 'react-icons/ai';
import type { Props } from './index';

export const GithubIcon = styled(AiFillGithub)<Props>`
  color: ${({ theme }) => theme.color.textColor};
  font-size: ${({ size }) => size || '3rem'};
`;
