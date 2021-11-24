import * as S from './styles';
import GithubIcon from '@components/common/GithubIcon';
import { theme } from '@globalStyles/theme';
import Parts from '@components/service/Header/Parts';

const DesktopHeader = () => {
  return (
    <S.DesktopHeader>
      <GithubIcon size="36px" color={theme.color.serviceHeaderTextColor} />
      <Parts.SearchInput />
    </S.DesktopHeader>
  );
};

export default DesktopHeader;
