import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100%;
  padding: 6px;
  margin-top: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.color['blue-0']};
  background-color: ${({ theme }) => theme.color['gray-11']};
  border: 1px solid ${({ theme }) => theme.color['gray-7']};
  border-radius: 6px;
  overflow-wrap: break-word;
  font-size: 14px;
  cursor: pointer;
  line-height: 1.5;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.color['gray-10']};
  }
`;
