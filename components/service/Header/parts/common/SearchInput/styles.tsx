import styled from '@emotion/styled';
import media from '@globalStyles/media';

export const Container = styled.article`
  position: relative;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color['gray-7']};
  color: ${({ theme }) => theme.color['gray-1']};
  background-color: ${({ theme }) => theme.color['gray-12']};
  padding: 0 12px;
  border-radius: 6px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.color['blue-1']};
    border-bottom: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color['gray-3']};
    letter-spacing: 0.2px;
  }

  ${media.md} {
    width: 272px;
    transition: width 0.2s ease-in-out;

    &:focus {
      width: 40vw;
    }
  }

  ${media.lg} {
    &:focus {
      width: 45vw;
      max-width: 33.875rem;
    }
  }
`;
