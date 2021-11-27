import styled from '@emotion/styled';
import { MdArrowDropDown } from 'react-icons/md';
import type { Props } from './index';
import { css, Theme } from '@emotion/react';

export const Details = styled.details`
  position: relative;

  summary {
    display: flex;
    cursor: pointer;
    list-style: none;

    ::-webkit-details-marker {
      display: none;
    }
  }
`;

type StyleProps = Pick<Props, 'menuFixedWidth'>;
export const DropdownMenu = styled.div<StyleProps>`
  width: ${({ menuFixedWidth }) => menuFixedWidth || 'auto'};
  position: absolute;
  top: calc(100% + 5px);
  right: 6px;
  z-index: 999;
  margin: 4px 0 0;
  padding: 4px 0;
  background-color: ${({ theme }) => theme.color['gray-10']};
  border: 1px solid ${({ theme }) => theme.color['gray-7']};
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
`;

export const DropdownIcon = styled(MdArrowDropDown)`
  color: ${({ theme }) => theme.color['gray-1']};
  font-size: 1.3rem;
  vertical-align: middle;
  margin-left: -2px;
`;

export const recommendedItemItemStyle = ({ theme }: { theme: Theme }) => css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${theme.color['gray-2']};
  line-height: 1.5;
  font-size: 0.92rem;
  padding: 4px 8px 4px 16px;

  &:hover,
  &:focus {
    color: ${theme.color['gray-1']};
    background-color: ${theme.color['blue-1']};
  }
`;
