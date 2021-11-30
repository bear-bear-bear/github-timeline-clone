import styled from '@emotion/styled';

export const Sentence = styled.span`
  a {
    font-size: 14px;
    color: ${({ theme }) => theme.color['gray-2']};
    word-break: break-all;
    font-weight: 600;

    :hover,
    :focus {
      color: ${({ theme }) => theme.color['blue-0']};
    }
  }

  span {
    font-size: 14px;
    overflow-wrap: break-word;
    color: ${({ theme }) => theme.color['gray-2']};
    margin: 0 0.3em;
  }
`;
