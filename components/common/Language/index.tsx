import { observer } from 'mobx-react-lite';
import getColor, { Language as LanguageType } from '@lib/getLanguageColor';
import * as S from './styles';

type Props = {
  language: LanguageType;
};

const Language = observer<Props>(({ language }) => {
  return (
    <S.InlineWrapper>
      <S.Circle bgColor={getColor(language)} />
      {language}
    </S.InlineWrapper>
  );
});

export default Language;
