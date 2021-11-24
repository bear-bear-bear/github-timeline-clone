import styled from '@emotion/styled';
import media from '@globalStyles/media';

export const Dashboard = styled.article`
  // Temp css for styling -- start
  background: yellow;
  min-height: 20rem;
  min-width: 20rem;
  // Temp css for styling -- end

  ${media.md} {
    border-right: 1px solid ${({ theme }) => theme.color.serviceMainBorderColor};
  }
`;

export const StickyWrapper = styled.section`
  ${media.md} {
    position: sticky;
    top: 0;
  }
`;