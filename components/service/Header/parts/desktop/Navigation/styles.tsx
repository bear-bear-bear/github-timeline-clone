import styled from '@emotion/styled';

export const Navigation = styled.nav`
  ul {
    display: flex;
    gap: 1rem;
  }

  a {
    color: ${({ theme }) => theme.color.serviceHeaderTextColor};
    font-weight: 500;
    font-size: 0.92rem;
  }
`;
