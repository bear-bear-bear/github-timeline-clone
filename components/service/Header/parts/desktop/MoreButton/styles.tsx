import styled from '@emotion/styled';
import { HiOutlinePlusSm } from 'react-icons/hi';

export const LinkItems = styled.a`
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
`;

export const MoreIcon = styled(HiOutlinePlusSm)`
  color: ${({ theme }) => theme.color.serviceHeaderTextColor};
  font-size: 1.3rem;
  vertical-align: middle;
  margin-left: -2px;
`;
