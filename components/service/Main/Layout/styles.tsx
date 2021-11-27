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
  ${media.md} {
    // Temp css for styling -- start
    width: 400px;
    // Temp css for styling -- end

    flex: 1 1 auto;
  }
`;
