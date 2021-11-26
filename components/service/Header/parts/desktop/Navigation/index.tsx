import { observer } from 'mobx-react-lite';
import * as S from './styles';

const navItems = [
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
];

const Navigation = observer(() => {
  return (
    <S.Navigation>
      <ul>
        {navItems.map((item) => (
          <li key={item.endpoint}>
            <a href={`https://github.com/${item.endpoint}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </S.Navigation>
  );
});

export default Navigation;
