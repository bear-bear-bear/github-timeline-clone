import styled from '@emotion/styled';
import media from '@globalStyles/media';

export const Aside = styled.aside`
  // Temp css for styling -- start
  background: blue;
  min-width: 20rem;
  // Temp css for styling -- end

  display: none;

  ${media.lg} {
    display: block;
  }
`;
