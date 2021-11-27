import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useTheme } from '@emotion/react';
import GithubIcon from '@components/common/GithubIcon';
import NotificationBell from '@components/service/Header/parts/common/NotificationBell';
import Menu from '@components/service/Header/parts/mobile/Menu';
import * as S from './styles';

const MobileHeader = observer(() => {
  const theme = useTheme();
  const [menuHide, setMenuHide] = useState<boolean>(true);

  const handleBuggerIconClick = () => {
    setMenuHide((prev) => !prev);
  };

  return (
    <S.MobileHeader>
      <S.VisibleSection>
        <S.BurgerIcon onClick={handleBuggerIconClick} />
        <GithubIcon size="36px" color={theme.color['gray-1']} />
        <NotificationBell />
      </S.VisibleSection>
      {!menuHide && <Menu />}
    </S.MobileHeader>
  );
});

export default MobileHeader;
