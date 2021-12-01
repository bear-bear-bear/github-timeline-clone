import styled from '@emotion/styled';
import media from '@globalStyles/media';

export const SearchList = styled.ul`
  width: 100%;
  position: absolute;
  z-index: 999;
  background-color: ${({ theme }) => theme.color['gray-10']};
  border: 1px solid ${({ theme }) => theme.color['gray-7']};

  ${media.sm} {
    background-color: ${({ theme }) => theme.color['gray-12']};
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;
