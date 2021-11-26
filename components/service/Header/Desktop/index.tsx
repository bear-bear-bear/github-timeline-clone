import { observer } from 'mobx-react-lite';
import GithubIcon from '@components/common/GithubIcon';
import { useTheme } from '@emotion/react';
import HeaderWrapper from '../parts/common/HeaderWrapper';
import SearchInput from '../parts/common/SearchInput';
import NotificationBell from '../parts/common/NotificationBell';
import Navigation from '../parts/desktop/Navigation';
import * as S from './styles';
import MoreButton from '@components/service/Header/parts/desktop/MoreButton';

const DesktopHeader = observer(() => {
  const theme = useTheme();

  return (
    <HeaderWrapper>
      <S.DesktopHeader>
        <GithubIcon size="36px" color={theme.color.serviceHeaderTextColor} />
        <SearchInput />
        <Navigation />
        <MoreButton />
        <NotificationBell />
      </S.DesktopHeader>
    </HeaderWrapper>
  );
});

export default DesktopHeader;
