import styled from '@emotion/styled';

export const ToggleButton = styled.button`
  float: right;
  margin: 0 0 8px 8px;
  padding: 3px 10px;
  outline: none;
  text-align: start;
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  white-space: nowrap;
  vertical-align: middle;
  box-shadow: var(--color-btn-shadow), var(--color-btn-inset-shadow);
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color['gray-7']};
  color: ${({ theme }) => theme.color['gray-2']};
  background-color: ${({ theme }) => theme.color['gray-9']};

  :focus,
  :hover {
    border: 1px solid ${({ theme }) => theme.color['gray-5']};
    color: ${({ theme }) => theme.color['gray-2']};
    background-color: ${({ theme }) => theme.color['gray-7']};
  }
`;
