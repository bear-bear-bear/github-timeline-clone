import styled from '@emotion/styled';
import { HiOutlineMenu } from 'react-icons/hi';

export const MobileHeader = styled.header`
  padding: 1rem;
`;

export const VisibleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BurgerIcon = styled(HiOutlineMenu)`
  color: ${({ theme }) => theme.color.serviceHeaderTextColor};
  font-size: 1.66rem;
  cursor: pointer;
`;
