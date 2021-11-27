import styled from '@emotion/styled';

export const Layout = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color['gray-11']};
`;

export const Container = styled.section`
  width: 500px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Header = styled.header`
  text-align: center; // for GitHubIcon

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.color['gray-2']};
    text-transform: capitalize;
    margin-top: 0.33rem;
  }
`;

export const LoginBox = styled.main`
  width: 300px;
  border: 1px solid ${({ theme }) => theme.color['gray-7']};
  padding: 20px;
  background-color: ${({ theme }) => theme.color['gray-9']};
`;
