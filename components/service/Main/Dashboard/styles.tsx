import styled from '@emotion/styled';
import media from '@globalStyles/media';

export const Dashboard = styled.article`
  ${media.md} {
    flex: 1 1 auto;
    max-width: 350px;
    border-right: 1px solid ${({ theme }) => theme.color.serviceMainBorderColor};
  }
`;

export const StickyWrapper = styled.section`
  ${media.md} {
    position: sticky;
    top: 0;
  }
`;
