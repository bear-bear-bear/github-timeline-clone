import styled from '@emotion/styled';
import media from '@globalStyles/media';

export const DesktopHeader = styled.header`
  ${media.md} {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.8rem 1.5rem;
  }

  ${media.lg} {
    padding: 0.8rem 1.9rem;
  }
`;

export const LeftSection = styled.section`
  display: flex;
  align-items: center;
  gap: 0.95rem;
`;

export const RightSection = styled.section`
  display: flex;
  align-items: center;
  gap: 0.66rem;
`;
