import styled from '@emotion/styled';
import media from '@globalStyles/media';

export const DesktopHeader = styled.header`
  display: none;

  ${media.md} {
    display: flex;
    padding: 1rem 1.5rem;
  }

  ${media.lg} {
    padding: 1rem 2rem;
  }
`;
