import styled from '@emotion/styled';
import { GrMenu } from 'react-icons/gr';

export const MobileHeader = styled.header`
  padding: 1rem;
`;

export const VisibleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BurgerIcon = styled(GrMenu)`
  font-size: 1.66rem;
  cursor: pointer;

  path {
    stroke: ${({ theme }) => theme.color.serviceHeaderTextColor};
  }
`;
