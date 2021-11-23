import type { Props } from './index';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type StyleProps = Pick<Props, 'fullWidth' | 'icon'>;

const fullWidthStyle = css`
  width: 100%;
`;

const withIconStyle = css`
  gap: 0.33rem;
`;

export const ButtonLink = styled.a<StyleProps>`
  display: flex;
  justify-content: center;
  width: fit-content;
  background-color: ${({ theme }) => theme.color.buttonBgColor};
  color: ${({ theme }) => theme.color.buttonTextColor};
  font-weight: 500;
  letter-spacing: 0.2px;
  border-radius: 6px;

  ${({ fullWidth }) => fullWidth && fullWidthStyle}
  ${({ icon }) => icon && withIconStyle}
`;
