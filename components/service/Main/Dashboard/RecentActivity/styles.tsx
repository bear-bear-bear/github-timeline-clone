import styled from '@emotion/styled';
import media from '@globalStyles/media';
import Container from '../parts/Container';
import { css, Theme } from '@emotion/react';
import { VscGitPullRequest, VscIssues } from 'react-icons/vsc';

export const RecentActivities = styled(Container)`
  margin: 12px 0 24px;

  ${media.md} {
    margin: initial;
  }
`;

export const Label = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.color['gray-1']};
  letter-spacing: 0.5px;

  ${media.sm} {
    color: ${({ theme }) => theme.color['gray-2']};
  }

  ${media.md} {
    font-weight: 500;
    letter-spacing: initial;
    font-size: 14px;
    line-height: 21px;
  }
`;

export const BoxStyle = ({ theme }: { theme: Theme }) => css`
  padding: 8px;
  background-color: ${theme.color['gray-10']};

  ${media.sm} {
    background-color: ${theme.color['gray-11']};
  }

  ${media.md} {
    background-color: inherit;
    border: none;
    padding: 0;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  & + & {
    margin-top: 8px;
  }
`;

export const Link = styled.a`
  word-break: break-word;
  overflow-wrap: break-word;
  color: ${({ theme }) => theme.color['gray-1']};
  font-size: 14px;
  line-height: 21px;

  :hover,
  :focus {
    color: ${({ theme }) => theme.color['blue-0']};
  }

  ${media.sm} {
    color: ${({ theme }) => theme.color['gray-2']};
  }
`;

const iconStyle = ({ theme }: { theme: Theme }) => css`
  vertical-align: middle;
  color: ${theme.color['green-1']};
  font-size: 16px;
`;
export const PullIcon = styled(VscGitPullRequest)`
  ${iconStyle}
`;
export const IssueIcon = styled(VscIssues)`
  ${iconStyle}
`;
