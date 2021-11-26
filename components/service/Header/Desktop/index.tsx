import { observer } from 'mobx-react-lite';
import { useCallback, useState } from 'react';
import { useTheme } from '@emotion/react';
import GithubIcon from '@components/common/GithubIcon';
import MoreButton from '@components/service/Header/parts/desktop/MoreButton';
import Profile from '@components/service/Header/parts/desktop/Profile';
import HeaderWrapper from '../parts/common/HeaderWrapper';
import SearchInput from '../parts/common/SearchInput';
import NotificationBell from '../parts/common/NotificationBell';
import Navigation from '../parts/desktop/Navigation';
import * as S from './styles';

type DropDownState = {
  moreButton: boolean;
  profile: boolean;
};

export type DropDownChildProps = {
  isOpen: boolean;
  toggleDropDownState: (stateName: keyof DropDownState) => void;
};

const DesktopHeader = observer(() => {
  const theme = useTheme();
  const [dropDownState, setDropDownState] = useState({
    moreButton: false,
    profile: false,
  });

  const toggleDropDownState = useCallback(
    (stateName: keyof DropDownState) => {
      const falsyState = Object.fromEntries(
        Object.entries(dropDownState).map(([key]) => [key, false]),
      );
      setDropDownState((prevState) => ({
        ...(falsyState as DropDownState),
        [stateName]: !prevState[stateName],
      }));
    },
    [dropDownState],
  );

  return (
    <HeaderWrapper>
      <S.DesktopHeader>
        <GithubIcon size="36px" color={theme.color.serviceHeaderTextColor} />
        <SearchInput />
        <Navigation />
        <MoreButton
          isOpen={dropDownState.moreButton}
          toggleDropDownState={toggleDropDownState}
        />
        <NotificationBell />
        <Profile
          isOpen={dropDownState.profile}
          toggleDropDownState={toggleDropDownState}
        />
      </S.DesktopHeader>
    </HeaderWrapper>
  );
});

export default DesktopHeader;
