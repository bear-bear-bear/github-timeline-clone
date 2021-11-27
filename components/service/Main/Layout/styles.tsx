import styled from '@emotion/styled';
import media from '@globalStyles/media';

export const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.serviceMainBgColor};

  ${media.md} {
    flex-direction: row;
  }
`;

export const LeftSection = styled.section`
  ${media.md} {
    flex: 1 1 auto;
    max-width: 350px;
    border-right: 1px solid ${({ theme }) => theme.color.serviceMainBorderColor};
  }
`;

export const LeftSectionStickyWrapper = styled.section`
  ${media.md} {
    position: sticky;
    top: 0;
  }
`;

export const CenterSection = styled.section`
  ${media.md} {
    // Temp css for styling -- start
    width: 400px;
    // Temp css for styling -- end

    flex: 1 1 auto;
  }
`;

export const RightSection = styled.section`
  display: none;

  ${media.lg} {
    flex: 1 1 auto;
    display: block;
    max-width: 350px;
  }
`;
