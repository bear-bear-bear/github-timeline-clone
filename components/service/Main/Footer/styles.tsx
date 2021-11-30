import styled from '@emotion/styled';
import _GithubIcon from '@components/common/GithubIcon';
import media from '@globalStyles/media';

export const Footer = styled.footer`
  width: 100%;
  margin: 32px 0;
  display: flex;
`;

export const LeftSection = styled.section`
  display: none;

  ${media.lg} {
    width: 33.33333332%;
    display: flex;
    align-items: flex-start;
    margin-right: 32px;

    a {
      display: flex;
      align-items: center;
      width: 100%;
      font-size: 12px;
      color: ${({ theme }) => theme.color['gray-5']};
      word-break: break-all;

      :focus,
      :hover {
        svg {
          color: ${({ theme }) => theme.color['gray-5']};
        }
      }
    }
  }
`;

export const GithubIcon = styled(_GithubIcon)`
  margin-right: 8px;
  color: ${({ theme }) => theme.color['gray-6']};
`;

export const RightSection = styled.section`
  display: flex;
  flex: 1 1 auto;

  ul {
    padding-left: 24px;
    width: 33.33333332%;

    @media only screen and (min-width: 1280px) {
      width: 24.99999999%;
    }
  }

  li {
    height: fit-content;
    text-align: -webkit-match-parent;
  }

  a {
    font-size: 12px;
    color: ${({ theme }) => theme.color['gray-5']};
    overflow-wrap: break-word;
  }
`;
