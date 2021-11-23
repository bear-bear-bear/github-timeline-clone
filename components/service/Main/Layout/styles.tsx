import styled from '@emotion/styled';
import media from '@globalStyles/media';

export const Layout = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.serviceMainBgColor};

  ${media.md} {
    flex-direction: row;
  }
`;

export const CenterSection = styled.section`
  flex: 1;
`;
