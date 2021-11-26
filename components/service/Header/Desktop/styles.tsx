import styled from '@emotion/styled';
import media from '@globalStyles/media';

export const DesktopHeader = styled.header`
  display: none;

  ${media.md} {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 1.5rem;
  }

  ${media.lg} {
    padding: 0.8rem 1.9rem;
  }
`;
