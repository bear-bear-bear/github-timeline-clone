import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Item = styled.li`
  position: relative;

  &:hover {
    background-color: ${({ theme }) =>
      theme.color.serviceHeaderInputFocusedBorderColor};

    svg {
      path {
        fill: ${({ theme }) => theme.color.serviceHeaderTextColor};
      }
    }

    p.repository-item__name {
      color: ${({ theme }) => theme.color.serviceHeaderTextColor};
    }

    p.repository-item__tooltip {
      opacity: 1;
      visibility: visible;
      border: 0.1px solid
        ${({ theme }) => theme.color.serviceHeaderInputFocusedBorderColor};
    }
  }

  & + & {
    border-top: 1px solid
      ${({ theme }) => theme.color.serviceHeaderInputBorderColor};
  }
`;

export const LinkWrapper = styled.a`
  display: flex;
  padding: 1rem 7rem 1rem 1rem;
  gap: 1rem;
  min-width: 0;
`;

export const IconWrapper = styled.section`
  svg {
    font-size: 1.1rem;

    path {
      fill: ${({ theme }) => theme.color.serviceHeaderInputIconColor};
    }
  }
`;

export const Name = styled.p`
  flex: 1;
  color: ${({ theme }) => theme.color.textColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type TooltipVisible = { alwaysOn?: boolean };
const visibleOnlyHoverStyle = ({ alwaysOn }: TooltipVisible) => {
  if (alwaysOn) return '';
  return css`
    opacity: 0;
    visibility: hidden;
  `;
};
export const Tooltip = styled.p<TooltipVisible>`
  position: absolute;
  display: flex;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  padding: 5px 5px 6px 5px;
  border: 0.1px solid ${({ theme }) => theme.color.subTextColor};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.serviceMainBgColor};
  color: ${({ theme }) => theme.color.subTextColor};
  font-size: 12px;
  vertical-align: middle;

  &::after {
    content: '↵';
    margin-left: 8px;
    position: relative;
    top: 1px;
  }

  ${visibleOnlyHoverStyle}
`;
