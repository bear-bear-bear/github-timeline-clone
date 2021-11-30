import { observer } from 'mobx-react-lite';
import { github } from '@lib/oauth';
import navItems from './navItems';
import * as S from './styles';

const Footer = observer(() => (
  <S.Footer>
    <S.LeftSection>
      <a title="Home page" href={github.HOST}>
        <S.GithubIcon size="24px" />
        <span>© 2021 GitHub, Inc.</span>
      </a>
    </S.LeftSection>
    <S.RightSection>
      {navItems.map((column) => (
        <ul key={column.reduce((acc, v) => acc + v.url, '')}>
          {column.map((navItem) => (
            <li key={navItem.url}>
              <a href={navItem.url}>{navItem.label}</a>
            </li>
          ))}
        </ul>
      ))}
    </S.RightSection>
  </S.Footer>
));

export default Footer;
