import styled from '@emotion/styled';

export const Container = styled.article`
  margin-top: 32px;
  padding: 0 24px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.color['gray-2']};
`;

export const Item = styled.article`
  margin: 8px 0;
  padding: 8px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color['gray-9']};
  }

  & > a {
    word-break: break-all;
    overflow-wrap: break-word;
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.color['gray-2']};

    :hover,
    :focus {
      color: ${({ theme }) => theme.color['blue-0']};
    }
  }

  & > p {
    margin-bottom: 8px;
    font-size: 12px;
    color: ${({ theme }) => theme.color['gray-5']};
  }

  & > section {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.color['gray-5']};
  }
`;
