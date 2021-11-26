import styled from '@emotion/styled';
import { recommendedItemStyle } from '@components/common/DropDown';

export const DropDownItemLink = styled.a`
  display: block;

  ${recommendedItemStyle}
`;

export const DevideLine = styled.div`
  height: 0.5px;
  margin: 0.66rem 0;
  background-color: ${({ theme }) => theme.color.serviceHeaderInputBorderColor};
`;

export const LogoutButton = styled.div`
  cursor: pointer;

  ${recommendedItemStyle}
`;
