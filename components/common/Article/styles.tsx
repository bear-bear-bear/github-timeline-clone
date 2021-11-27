import styled from '@emotion/styled';

export const DefaultTitle = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.color.textColor};
  letter-spacing: 0.5px;
`;
export const Box = styled.article`
  margin-top: 8px;
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.color.serviceHeaderInputBorderColor};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.loginBgColor};
`;
