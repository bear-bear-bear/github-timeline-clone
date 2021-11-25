import { observer } from 'mobx-react-lite';
import GithubIcon from '@components/common/GithubIcon';
import { theme } from '@globalStyles/theme';
import Parts from '@components/service/Header/Parts';
import * as S from './styles';

const DesktopHeader = observer(() => {
  return (
    <S.DesktopHeader>
      <GithubIcon size="36px" color={theme.color.serviceHeaderTextColor} />
      <Parts.SearchInput />
    </S.DesktopHeader>
  );
});

export default DesktopHeader;
