import styled from '@emotion/styled';
import Linkify from 'linkify-react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { css, Theme } from '@emotion/react';

export const ForkedBySection = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-bottom: 10px;
  font-size: 12px;

  span {
    color: ${({ theme }) => theme.color['gray-5']};
  }

  a {
    color: ${({ theme }) => theme.color['blue-0']};
  }
`;

export const ActorLink = styled.a`
  color: ${({ theme }) => theme.color['gray-2']};
  font-weight: 600;
  font-size: 16px;
  word-break: break-all;

  :hover,
  :focus {
    color: ${({ theme }) => theme.color['blue-0']};
  }
`;

export const LinkifyDescription = styled(Linkify)`
  margin-top: 4px;
  hyphens: auto;
  font-size: 14px;
  word-break: break-word;
  color: ${({ theme }) => theme.color['gray-5']};

  a {
    color: ${({ theme }) => theme.color['blue-0']};
  }
`;

export const BottomSection = styled.section`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
  color: ${({ theme }) => theme.color['gray-5']};
  font-size: 12px;

  a {
    line-height: 0;
    color: ${({ theme }) => theme.color['gray-5']};

    :hover {
      color: ${({ theme }) => theme.color['blue-0']};
    }
  }
`;

export const UpdatedDate = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color['gray-5']};
`;

const starIconStyle = ({ theme }: { theme: Theme }) => css`
  display: inline-block;
  position: relative;
  top: 3px;
  font-size: 18px;
  color: ${theme.color['gray-5']};
  margin: -1px 3px -1px -1px;
`;
export const OutlineStarIcon = styled(AiOutlineStar)`
  ${starIconStyle}
`;
export const FillStarIcon = styled(AiFillStar)`
  ${starIconStyle}
`;
