import styled from '@emotion/styled';

export const Activity = styled.main``;

export const Title = styled.h2`
  padding-top: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  overflow-wrap: break-word;
  color: ${({ theme }) => theme.color['gray-2']};
`;

export const CatLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 24px 0 8px;
  padding: 16px 0;

  color: ${({ theme }) => theme.color['gray-5']};
  font-size: 14px;
`;
