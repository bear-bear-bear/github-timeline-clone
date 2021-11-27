import styled from '@emotion/styled';
import { IoMdNotificationsOutline } from 'react-icons/io';

export const Badge = styled.div`
  position: absolute;
  z-index: 1;
  top: -5px;
  right: -2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-image: linear-gradient(#54a3ff, #006eed);
  background-clip: padding-box;
  border: 2px solid ${({ theme }) => theme.color['gray-10']};
`;

export const NotificationBell = styled(IoMdNotificationsOutline)`
  position: relative;
  color: ${({ theme }) => theme.color['gray-1']};
  font-size: 1.4rem;
`;
