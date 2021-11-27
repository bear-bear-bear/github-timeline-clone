import styled from '@emotion/styled';
import media from '@globalStyles/media';

export const MobileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.serviceHeaderBgColor};

  ${media.md} {
    display: none;
  }
`;
