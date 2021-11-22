import { css } from '@emotion/react';

const ROBOTO_DIR = '/fonts/Roboto-subset';
const NOTOSANS_DIR = '/fonts/NotoSans-subset';
const NOTOSANS_REMOTE = '//fonts.gstatic.com/ea/notosanskr/v2';

const FontFace = css`
  /* ---------------------------------------------------------------------------------------- */
  /* -- Roboto -- */
  // 숫자, 영문 기본 폰트 (body에 적용)
  // font-weight: 100 300 400 500 700 900
  /* ---------------------------------------------------------------------------------------- */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    src: local('Roboto Thin'), local('Roboto-Thin'),
      url(${ROBOTO_DIR}/Roboto-Thin.woff2) format('woff2'),
      url(${ROBOTO_DIR}/Roboto-Thin.woff) format('woff'),
      url(${ROBOTO_DIR}/Roboto-Thin.otf) format('opentype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local('Roboto Light'), local('Roboto-Light'),
      url(${ROBOTO_DIR}/Roboto-Light.woff2) format('woff2'),
      url(${ROBOTO_DIR}/Roboto-Light.woff) format('woff'),
      url(${ROBOTO_DIR}/Roboto-Light.otf) format('opentype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Regular'), local('Roboto-Regular'),
      url(${ROBOTO_DIR}/Roboto-Regular.woff2) format('woff2'),
      url(${ROBOTO_DIR}/Roboto-Regular.woff) format('woff'),
      url(${ROBOTO_DIR}/Roboto-Regular.otf) format('opentype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: local('Roboto Medium'), local('Roboto-Medium'),
      url(${ROBOTO_DIR}/Roboto-Medium.woff2) format('woff2'),
      url(${ROBOTO_DIR}/Roboto-Medium.woff) format('woff'),
      url(${ROBOTO_DIR}/Roboto-Medium.otf) format('opentype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local('Roboto Bold'), local('Roboto-Bold'),
      url(${ROBOTO_DIR}/Roboto-Bold.woff2) format('woff2'),
      url(${ROBOTO_DIR}/Roboto-Bold.woff) format('woff'),
      url(${ROBOTO_DIR}/Roboto-Bold.otf) format('opentype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    src: local('Roboto Black'), local('Roboto-Black'),
      url(${ROBOTO_DIR}/Roboto-Black.woff2) format('woff2'),
      url(${ROBOTO_DIR}/Roboto-Black.woff) format('woff'),
      url(${ROBOTO_DIR}/Roboto-Black.otf) format('opentype');
  }

  /* ---------------------------------------------------------------------------------------- */
  /* Noto Sans KR */
  // 한글 기본 폰트 ( body에 적용 )
  // font-weight: 100 300 400 500 700 900
  /* ---------------------------------------------------------------------------------------- */
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 100;
    src: url(${NOTOSANS_DIR}/NotoSans-Thin.woff2) format('woff2'),
      url(${NOTOSANS_DIR}/NotoSans-Thin.woff) format('woff'),
      url(${NOTOSANS_DIR}/NotoSans-Thin.otf) format('opentype'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Thin.woff2) format('woff2'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Thin.woff) format('woff'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Thin.otf) format('opentype');
    unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7A3,
      U+D7B0-D7FF;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    src: url(${NOTOSANS_DIR}/NotoSans-Light.woff2) format('woff2'),
      url(${NOTOSANS_DIR}/NotoSans-Light.woff) format('woff'),
      url(${NOTOSANS_DIR}/NotoSans-Light.otf) format('opentype'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Light.woff2) format('woff2'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Light.woff) format('woff'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Light.otf) format('opentype');
    unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7A3,
      U+D7B0-D7FF;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: url(${NOTOSANS_DIR}/NotoSans-Regular.woff2) format('woff2'),
      url(${NOTOSANS_DIR}/NotoSans-Regular.woff) format('woff'),
      url(${NOTOSANS_DIR}/NotoSans-Regular.otf) format('opentype'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Regular.woff2) format('woff2'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Regular.woff) format('woff'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Regular.otf) format('opentype');
    unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7A3,
      U+D7B0-D7FF;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    src: url(${NOTOSANS_DIR}/NotoSans-Medium.woff2) format('woff2'),
      url(${NOTOSANS_DIR}/NotoSans-Medium.woff) format('woff'),
      url(${NOTOSANS_DIR}/NotoSans-Medium.otf) format('opentype'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Medium.woff2) format('woff2'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Medium.woff) format('woff'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Medium.otf) format('opentype');
    unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7A3,
      U+D7B0-D7FF;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    src: url(${NOTOSANS_DIR}/NotoSans-Bold.woff2) format('woff2'),
      url(${NOTOSANS_DIR}/NotoSans-Bold.woff) format('woff'),
      url(${NOTOSANS_DIR}/NotoSans-Bold.otf) format('opentype'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Bold.woff2) format('woff2'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Bold.woff) format('woff'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Bold.otf) format('opentype');
    unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7A3,
      U+D7B0-D7FF;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    src: url(${NOTOSANS_DIR}/NotoSans-Black.woff2) format('woff2'),
      url(${NOTOSANS_DIR}/NotoSans-Black.woff) format('woff'),
      url(${NOTOSANS_DIR}/NotoSans-Black.otf) format('opentype'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Black.woff2) format('woff2'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Black.woff) format('woff'),
      url(${NOTOSANS_REMOTE}/NotoSansKR-Black.otf) format('opentype');
    unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7A3,
      U+D7B0-D7FF;
  }
`;

export default FontFace;
