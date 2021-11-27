import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { FiLogOut } from 'react-icons/fi';

export const InputWrapper = styled.section`
  padding: 1rem 0;
`;

const ItemStyle = ({ theme }: { theme: Theme }) => css`
  display: block;
  padding: 8px 0;
  font-weight: 500;
  font-size: 0.92rem;
  line-height: 1.5;
  color: ${theme.color.serviceHeaderTextColor};
  border-top: 1px solid ${theme.color.serviceHeaderInputBorderColor};
`;

const ItemWithAvatarStyle = css`
  display: flex;
  align-items: center;
  gap: 0.33rem;
`;

export const LinkItem = styled.a<{ withAvatar?: boolean }>`
  ${ItemStyle}

  ${({ withAvatar }) => withAvatar && ItemWithAvatarStyle}
`;

export const SignOutItem = styled.div<{ withAvatar?: boolean }>`
  ${ItemStyle}
  ${ItemWithAvatarStyle}
`;

export const ExitIcon = styled(FiLogOut)`
  font-size: 1.1rem;
`;
