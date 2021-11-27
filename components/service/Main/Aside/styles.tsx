import styled from '@emotion/styled';
import media from '@globalStyles/media';

export const Aside = styled.aside`
  // Temp css for styling -- start
  background: blue;
  // Temp css for styling -- end

  display: none;

  ${media.lg} {
    flex: 1 1 auto;
    display: block;
    max-width: 350px;
  }
`;
