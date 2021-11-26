import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { MdArrowDropDown } from 'react-icons/md';
import type { Theme } from '@emotion/react';

export const Details = styled.details`
  position: relative;

  summary {
    list-style: none;

    ::-webkit-details-marker {
      display: none;
    }
  }
`;

export const DropdownMenu = styled.div`
  width: 160px;
  position: absolute;
  right: 6px;
  z-index: 999;
  margin: 4px 0 0;
  padding: 4px 0;
  background-color: ${({ theme }) => theme.color.serviceHeaderBgColor};
  border: 1px solid ${({ theme }) => theme.color.serviceHeaderInputBorderColor};
  border-radius: 6px;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 12px;
    transform: translateY(-50%) rotateZ(45deg);
    display: block;
    width: 12px;
    height: 12px;
    background-color: inherit;
    border: inherit;
    border-bottom: none;
    border-right: none;
  }

  a {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${({ theme }) => theme.color.textColor};
    line-height: 1.5;
    font-size: 0.92rem;
    padding: 4px 8px 4px 16px;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.color.serviceHeaderTextColor};
      background-color: ${({ theme }) =>
        theme.color.serviceHeaderInputFocusedBorderColor};
    }
  }
`;

const summaryIconStyles = ({ theme }: { theme: Theme }) => css`
  color: ${theme.color.serviceHeaderTextColor};
  cursor: pointer;
  font-size: 1.3rem;
  vertical-align: middle;
`;
export const MoreIcon = styled(HiOutlinePlusSm)`
  ${summaryIconStyles}
`;
export const DropdownIcon = styled(MdArrowDropDown)`
  margin-left: -2px;
  ${summaryIconStyles}
`;
