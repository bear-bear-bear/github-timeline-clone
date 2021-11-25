import { observer } from 'mobx-react-lite';
import * as S from './styles';

const KeySlashIcon = observer(() => (
  <S.KeySlashSvg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <S.KeySlashFirstPath d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z" />
    <S.KeySlashSecondPath d="M11.8 6L8 15.1h-.9L10.8 6h1z" />
  </S.KeySlashSvg>
));

const SearchIcon = observer(() => (
  <svg
    aria-label="search"
    role="img"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    version="1.1"
  >
    <path
      fillRule="evenodd"
      d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
    />
  </svg>
));

const RepositoryIcon = observer(() => (
  <svg
    aria-label="repository"
    role="img"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    version="1.1"
  >
    <path
      fillRule="evenodd"
      d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
    />
  </svg>
));

const Icon = {
  KeySlash: KeySlashIcon,
  Search: SearchIcon,
  Repository: RepositoryIcon,
};

export default Icon;
