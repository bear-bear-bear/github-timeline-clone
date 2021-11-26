import { observer } from 'mobx-react-lite';
import { github } from '@lib/oauth';
import DropDown from '@components/common/DropDown';
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
  <DropDown SvgIcon={S.MoreIcon} menuFixedWidth="160px">
    {moreItems.map((item) => (
      <S.LinkItems key={item.url} href={item.url}>
        {item.label}
      </S.LinkItems>
    ))}
  </DropDown>
));

export default MoreButton;
