import styled from '@emotion/styled';
import _Avatar from '@components/common/Avatar';
import { Fold, UnFold } from '@components/service/Main/Activity/FoldIcon';
import { css, Theme } from '@emotion/react';

export const Card = styled.article`
  display: flex;
  width: 100%;
  padding: 16px 0;
`;

export const Ago = styled.span`
  color: ${({ theme }) => theme.color['gray-5']};
  font-size: 12px;
  white-space: nowrap;
  margin-left: 8px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Content = styled.div`
  display: inline-block;
  width: 100%;
  padding-top: 3px;
`;

export const Box = styled.div`
  min-height: 60px;
  margin: 8px 0 0;
  padding: 16px;
  color: ${({ theme }) => theme.color['gray-2']};
  background-color: ${({ theme }) => theme.color['gray-11']};
  border: 1px solid ${({ theme }) => theme.color['gray-7']};
  border-radius: 6px;
`;

export const Avatar = styled(_Avatar)`
  margin-right: 8px;
`;

const iconStyle = ({ theme }: { theme: Theme }) => css`
  margin-right: 3px;
  font-size: 16px;
  cursor: pointer;
  fill: ${theme.color['gray-5']};
`;
export const FoldIcon = styled(Fold)`
  ${iconStyle}
`;
export const UnFoldIcon = styled(UnFold)`
  ${iconStyle}
`;
