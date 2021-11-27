import styled from '@emotion/styled';
import media from '@globalStyles/media';

export const Navigation = styled.nav`
  ul {
    display: flex;
    gap: 1rem;
  }

  a {
    color: ${({ theme }) => theme.color['gray-1']};
    font-weight: 500;
    font-size: 0.92rem;

    &[title='Pull'] {
      ${media.md} {
        ::after {
          content: 's';
        }
      }
      ${media.lg} {
        ::after {
          content: ' Requests';
        }
      }
    }

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.color['gray-3']};
    }
  }
`;
