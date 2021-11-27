import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import GithubIcon from '@components/common/GithubIcon';
import MoreButton from '@components/service/Header/parts/desktop/MoreButton';
import Profile from '@components/service/Header/parts/desktop/Profile';
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

  const allValueToFalse = useCallback(
    (obj: DropDownState) =>
      Object.keys(obj).reduce(
        (acc, curr) => ({ ...acc, [curr]: false }),
        {} as DropDownState,
      ),
    [],
  );

  const toggleDropDownState = useCallback(
    (stateName: keyof DropDownState) => {
      setDropDownState((prevState) => ({
        ...allValueToFalse(prevState),
        [stateName]: !prevState[stateName],
      }));
    },
    [allValueToFalse],
  );

  useEffect(() => {
    const closeDetails = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestDropDownEl = target.closest('details.dropdown');

      if (closestDropDownEl === null) {
        setDropDownState((prevState) => allValueToFalse(prevState));
        return;
      }
    };

    window.addEventListener('click', closeDetails, false);

    return () => {
      window.removeEventListener('click', closeDetails, false);
    };
  });

  return (
    <S.DesktopHeader>
      <S.LeftSection>
        <GithubIcon size="36px" color={theme.color['gray-1']} />
        <SearchInput />
        <Navigation />
      </S.LeftSection>

      <S.RightSection>
        <NotificationBell />
        <MoreButton
          isOpen={dropDownState.moreButton}
          toggleDropDownState={toggleDropDownState}
        />
        <Profile
          isOpen={dropDownState.profile}
          toggleDropDownState={toggleDropDownState}
        />
      </S.RightSection>
    </S.DesktopHeader>
  );
});

export default DesktopHeader;
