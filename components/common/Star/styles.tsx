import styled from '@emotion/styled';
import { AiOutlineStar } from 'react-icons/ai';

export const InlineWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 1px;
  color: ${({ theme }) => theme.color['gray-5']};
  font-size: 12px;
`;
export const Star = styled(AiOutlineStar)`
  font-size: 18px;
`;
