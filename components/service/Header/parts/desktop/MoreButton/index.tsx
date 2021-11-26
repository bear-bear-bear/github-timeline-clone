import { observer } from 'mobx-react-lite';
import * as S from './styles';

const moreItems = [
  {
    label: 'New repository',
    url: 'https://github.com/new',
  },
  {
    label: 'Import repository',
    url: 'https://github.com/new/import',
  },
  {
    label: 'New gist',
    url: 'https://gist.github.com',
  },
  {
    label: 'New organization',
    url: 'https://github.com/organiztions/new',
  },
  {
    label: 'New Project',
    url: 'https://github.com/new/project',
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
