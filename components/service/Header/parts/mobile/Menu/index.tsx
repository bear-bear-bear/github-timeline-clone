import axios from 'axios';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import useUser from '@hooks/useUser';
import { github } from '@lib/oauth';
import SearchInput from '@components/service/Header/parts/common/SearchInput';
import Avatar from '@components/common/Avatar';
import * as S from './styles';

const navItems = [
  {
    label: 'Dashboard',
    endpoint: '/dashboard',
  },
  {
    label: 'Pull requests',
    endpoint: '/pulls',
  },
  {
    label: 'Issues',
    endpoint: '/issues',
  },
  {
    label: 'Marketplace',
    endpoint: '/marketplace',
  },
  {
    label: 'Explore',
    endpoint: '/explore',
  },
  {
    label: 'Codespaces',
    endpoint: '/codespaces',
  },
  {
    label: 'Sponsors',
    endpoint: '/sponsors/accounts',
  },
  {
    label: 'Settings',
    endpoint: '/settings/profile',
  },
];

const Menu = observer(() => {
  const user = useUser();
  const router = useRouter();

  const logout = async () => {
    await axios.get('/api/auth/logout');
    router.replace('/login');
  };

  return (
    <div>
      <S.InputWrapper>
        <SearchInput />
      </S.InputWrapper>
      {navItems.map(({ label, endpoint }) => (
        <S.LinkItem href={`${github.HOST}${endpoint}`} key={endpoint}>
          {label}
        </S.LinkItem>
      ))}
      <S.LinkItem href={user.html_url} withAvatar>
        <Avatar avatarUrl={user.avatar_url} size="20px" />
        bear-bear-bear
      </S.LinkItem>
      <S.SignOutButton onClick={logout}>
        <S.ExitIcon />
        Sign out
      </S.SignOutButton>
    </div>
  );
});

export default Menu;
