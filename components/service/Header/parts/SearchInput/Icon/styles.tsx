import styled from '@emotion/styled';

export const KeySlashSvg = styled.svg`
  position: absolute;
  right: 0.25rem;
  width: 1.33rem;
  height: 1.33rem;
`;
export const KeySlashFirstPath = styled.path`
  fill: none;
  stroke: ${({ theme }) => theme.color.serviceHeaderInputIconColor};
  opacity: 0.4;
`;
export const KeySlashSecondPath = styled.path`
  fill: ${({ theme }) => theme.color.serviceHeaderInputIconColor};
`;
