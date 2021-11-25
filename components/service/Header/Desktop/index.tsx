import { observer } from 'mobx-react-lite';
import GithubIcon from '@components/common/GithubIcon';
import { useTheme } from '@emotion/react';
import parts from '../parts';
import * as S from './styles';

const DesktopHeader = observer(() => {
  const theme = useTheme();

  return (
    <parts.HeaderWrapper>
      <S.DesktopHeader>
        <GithubIcon size="36px" color={theme.color.serviceHeaderTextColor} />
        <parts.SearchInput />
      </S.DesktopHeader>
    </parts.HeaderWrapper>
  );
});

export default DesktopHeader;
