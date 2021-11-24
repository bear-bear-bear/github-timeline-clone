import styled from '@emotion/styled';
import media from '@globalStyles/media';

export const MobileHeader = styled.header`
  display: flex;
  padding: 1rem;

  ${media.md} {
    display: none;
  }
`;
