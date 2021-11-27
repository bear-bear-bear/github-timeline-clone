import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import useStore from '@hooks/useStore';
import { github } from '@lib/oauth';
import * as S from './styles';

const NotificationBell = observer(() => {
  const { notificationState } = useStore();

  useEffect(() => {
    if (notificationState.isNotFetched) {
      notificationState.fetch();
    }
  });

  return (
    <a
      href={github.HOST + '/notifications'}
      title={
        notificationState.isUnreadNotification
          ? 'You have unread notifications'
          : undefined
      }
      style={{ position: 'relative' }} // inline css is for return FC type
    >
      <S.NotificationBell />
      {notificationState.isUnreadNotification && <S.Badge />}
    </a>
  );
});

export default NotificationBell;
