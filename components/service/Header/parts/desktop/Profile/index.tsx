import axios from 'axios';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import useUser from '@hooks/useUser';
import Avatar from '@components/common/Avatar';
import DropDown from '@components/common/DropDown';
import type { DropDownChildProps } from '@components/service/Header/Desktop';
import type { User } from '@typings/oauth';
import * as S from './styles';
import { github } from '@lib/oauth';

type NavItem = {
  label: string;
  url: string;
};

const getUserNavItems = (user: User): NavItem[] => [
  {
    label: 'Your profile',
    url: `${github.HOST}/${user.login}`,
  },
  {
    label: 'Your repository',
    url: `${github.HOST}/${user.login}?tab=repositories`,
  },
  {
    label: 'Your codespaces',
    url: `${github.HOST}/features/codespaces`,
  },
  {
    label: 'Your projects',
    url: `${github.HOST}/${user.login}?tab=projects`,
  },
  {
    label: 'Your stars',
    url: `${github.HOST}/${user.login}?tab=stars`,
  },
  {
    label: 'Your gists',
    url: `https://gist.github.com/${user.login}`,
  },
];

const commonNavItems: NavItem[] = [
  {
    label: 'Upgrade',
    url: `${github.HOST}/settings/billing/plans`,
  },
  {
    label: 'Help',
    url: `https://docs.github.com/en`,
  },
  {
    label: 'Your profile',
    url: `${github.HOST}/settings/profile`,
  },
];

const Profile = observer<DropDownChildProps>(
  ({ isOpen, toggleDropDownState }) => {
    const user = useUser();
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLDetailsElement>) => {
      e.preventDefault();
      e.stopPropagation();
      toggleDropDownState('profile');
    };

    const logout = async () => {
      await axios.get('/api/auth/logout');
      router.replace('/login');
    };

    return (
      <DropDown
        SvgIcon={() => <Avatar avatarUrl={user.avatar_url} size="20px" />}
        menuFixedWidth="180px"
        open={isOpen}
        onClick={handleClick}
      >
        <S.DropDownItemLink href={user.html_url}>
          <p>Signed in as</p>
          <strong>{user.login}</strong>
        </S.DropDownItemLink>

        <S.DevideLine />

        {getUserNavItems(user).map(({ label, url }) => (
          <S.DropDownItemLink href={url} key={url}>
            {label}
          </S.DropDownItemLink>
        ))}

        <S.DevideLine />

        {commonNavItems.map(({ label, url }) => (
          <S.DropDownItemLink href={url} key={url}>
            {label}
          </S.DropDownItemLink>
        ))}

        <S.DevideLine />

        <S.LogoutButton onClick={logout}>Sign out</S.LogoutButton>
      </DropDown>
    );
  },
);

export default Profile;
