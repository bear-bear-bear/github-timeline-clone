import { observer } from 'mobx-react-lite';
import { github } from '@lib/oauth';
import * as S from './styles';

const navItems = [
  {
    label: 'Pull',
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
            <a href={`${github.HOST}/${item.endpoint}`} title={item.label}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </S.Navigation>
  );
});

export default Navigation;
