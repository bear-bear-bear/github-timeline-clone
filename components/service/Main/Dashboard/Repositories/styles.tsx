import styled from '@emotion/styled';
import ArticleBox from '@components/common/ArticleBox';
import media from '@globalStyles/media';
import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const Repositories = styled(ArticleBox)`
  margin: 12px 0 24px;
`;

export const BoxStyle = ({ theme }: { theme: Theme }) => css`
  padding: 36px 8px 20px;
  background-color: ${theme.color.serviceHeaderBgColor};

  ${media.sm} {
    background-color: ${theme.color.loginBgColor};
  }

  ${media.md} {
    background-color: inherit;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  margin: 0 0 16px;
  padding: 5px 12px;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  color: ${({ theme }) => theme.color.textColor};
  background-color: ${({ theme }) => theme.color.serviceMainBgColor};
  border: 1px solid ${({ theme }) => theme.color.loginBorderColor};
  border-radius: 6px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.subTextColor};
  }

  &:focus {
    border: 1px solid
      ${({ theme }) => theme.color.serviceHeaderInputFocusedBorderColor};
    box-shadow: rgb(12, 45, 107) 0 0 0 3px;
  }
`;

export const ShowMoreButton = styled.button`
  width: 100%;
  background-color: inherit;
  border: none;
  outline: none;
  text-align: start;
  cursor: pointer;
  margin: 16px 0 0;
  padding: 16px 8px;
  color: ${({ theme }) => theme.color.subTextColor};
  border-top: 1px solid ${({ theme }) => theme.color.loginBorderColor};
  font-size: 12px;

  :hover,
  :focus {
    color: ${({ theme }) => theme.color.linkColor};
  }
`;

export const List = styled.ul``;
export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.33rem;
  margin-top: 12px;
`;
export const Link = styled.a`
  word-break: break-word;
  overflow-wrap: break-word;
  color: ${({ theme }) => theme.color.textColor};
  font-size: 14px;

  :hover,
  :focus {
    color: ${({ theme }) => theme.color.linkColor};
  }
`;
