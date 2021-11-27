import styled from '@emotion/styled';
import { recommendedItemStyle } from '@components/common/DropDown';

export const DropDownItemLink = styled.a`
  display: block;

  ${recommendedItemStyle}
`;

export const DevideLine = styled.div`
  height: 0.5px;
  margin: 8px 0;
  background-color: ${({ theme }) => theme.color.serviceHeaderInputBorderColor};
`;

export const LogoutButton = styled.button`
  width: 100%;
  background-color: inherit;
  border: none;
  outline: none;
  text-align: start;
  cursor: pointer;

  ${recommendedItemStyle}
`;
