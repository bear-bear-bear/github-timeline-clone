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
  background-color: ${theme.color['gray-10']};

  ${media.sm} {
    background-color: ${theme.color['gray-11']};
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
  color: ${({ theme }) => theme.color['gray-2']};
  background-color: ${({ theme }) => theme.color['gray-12']};
  border: 1px solid ${({ theme }) => theme.color['gray-7']};
  border-radius: 6px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color['gray-5']};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.color['blue-1']};
    box-shadow: ${({ theme }) => theme.color['blue-2']} 0 0 0 3px;
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
  color: ${({ theme }) => theme.color['gray-5']};
  border-top: 1px solid ${({ theme }) => theme.color['gray-7']};
  font-size: 12px;

  :hover,
  :focus {
    color: ${({ theme }) => theme.color['blue-0']};
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
  color: ${({ theme }) => theme.color['gray-2']};
  font-size: 14px;

  :hover,
  :focus {
    color: ${({ theme }) => theme.color['blue-0']};
  }
`;
