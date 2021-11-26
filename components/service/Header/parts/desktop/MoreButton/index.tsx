import { observer } from 'mobx-react-lite';
import { github } from '@lib/oauth';
import * as S from './styles';

const moreItems = [
  {
    label: 'New repository',
    url: `${github.HOST}/new`,
  },
  {
    label: 'Import repository',
    url: `${github.HOST}/new/import`,
  },
  {
    label: 'New gist',
    url: 'https://gist.github.com',
  },
  {
    label: 'New organization',
    url: `${github.HOST}/organizations/new`,
  },
  {
    label: 'New Project',
    url: `${github.HOST}/new/project`,
  },
];

const MoreButton = observer(() => (
  <S.Details>
    <summary>
      <S.MoreIcon />
      <S.DropdownIcon />
    </summary>
    <S.DropdownMenu>
      {moreItems.map((item) => (
        <a key={item.url} href={item.url}>
          {item.label}
        </a>
      ))}
    </S.DropdownMenu>
  </S.Details>
));

export default MoreButton;
