import styled from '@emotion/styled';

export const SearchList = styled.ul`
  width: 100%;
  position: absolute;
  z-index: 999;
  background-color: ${({ theme }) => theme.color.serviceMainBgColor};
  border: 1px solid ${({ theme }) => theme.color.serviceHeaderInputBorderColor}; ;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;
