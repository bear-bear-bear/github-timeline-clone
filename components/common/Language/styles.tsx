import styled from '@emotion/styled';

export const InlineWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  color: ${({ theme }) => theme.color['gray-5']};
  font-size: 12px;
  line-height: 16px;
`;

export const Circle = styled.div<{ bgColor: string }>`
  position: relative;
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid ${({ theme }) => theme.color['gray-6']};
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
`;
