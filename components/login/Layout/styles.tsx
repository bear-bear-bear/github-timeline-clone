import styled from '@emotion/styled';
import { AiFillGithub } from 'react-icons/ai';

export const Layout = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.loginBgColor};
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
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.color.textColor};
    text-transform: capitalize;
    margin-top: 0.33rem;
  }
`;

export const GitHubIcon = styled(AiFillGithub)`
  color: ${({ theme }) => theme.color.textColor};
  font-size: 3.5rem;
`;

export const LoginBox = styled.main`
  width: 300px;
  border: 1px solid ${({ theme }) => theme.color.loginBorderColor};
  padding: 20px;
  background-color: ${({ theme }) => theme.color.loginMainBgColor};
`;
