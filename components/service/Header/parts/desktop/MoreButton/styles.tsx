import styled from '@emotion/styled';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { recommendedItemStyle } from '@components/common/DropDown';

export const LinkItems = styled.a`
  display: block;

  ${recommendedItemStyle}
`;

export const MoreIcon = styled(HiOutlinePlusSm)`
  color: ${({ theme }) => theme.color.serviceHeaderTextColor};
  font-size: 1.3rem;
  vertical-align: middle;
  margin-left: -2px;
`;
