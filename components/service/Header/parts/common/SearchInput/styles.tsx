import styled from '@emotion/styled';

export const Container = styled.article`
  position: relative;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
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
    width: 33.875rem;
    border: 1px solid
      ${({ theme }) => theme.color.serviceHeaderInputFocusedBorderColor};
    border-bottom: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.serviceHeaderInputPlaceholderColor};
    letter-spacing: 0.2px;
  }
`;
