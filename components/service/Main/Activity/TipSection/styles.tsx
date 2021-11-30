import styled from '@emotion/styled';

export const Wrapper = styled.section`
  margin-top: 24px;

  p {
    color: ${({ theme }) => theme.color['gray-5']};
    font-size: 12px;

    :nth-child(2) {
      margin: 8px 0;
    }
  }

  a {
    color: ${({ theme }) => theme.color['blue-0']};

    :hover,
    :focus {
      text-decoration-line: underline;
    }
  }

  strong {
    font-weight: 600;
  }

  svg {
    fill: ${({ theme }) => theme.color['gray-5']};
    vertical-align: text-top;
  }
`;
