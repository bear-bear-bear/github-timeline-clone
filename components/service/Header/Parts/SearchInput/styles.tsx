import styled from '@emotion/styled';

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const Input = styled.input`
  width: 18rem;
  height: 2rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.serviceHeaderInputBorderColor};
  color: ${({ theme }) => theme.color.serviceHeaderTextColor};
  background-color: ${({ theme }) => theme.color.serviceMainBgColor};
  padding: 0 12px;
  border-radius: 6px;
  transition: width 0.2s ease-in-out;

  &:focus {
    width: 25rem;
    border: 1px solid
      ${({ theme }) => theme.color.serviceHeaderInputFocusedBorderColor};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.serviceHeaderInputPlaceholderColor};
    letter-spacing: 0.2px;
  }
`;
