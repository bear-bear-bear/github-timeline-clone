type Screen = 'sm' | 'md' | 'lg';

type MediaBreakPoints = Record<Screen, number>;
type Media = {
  [key in Screen]: `@media only screen and (min-width: ${string}px)`;
};

export const mediaBreakpoints: MediaBreakPoints = {
  sm: 576,
  md: 768,
  lg: 1024,
};

/**
 * @description jsx style 내부에서 사용할 수 있는 @media screen helper
 *
 * @property {string} sm - 576px 이상
 * @property {string} md - 768px 이상
 * @property {string} lg - 992px 이상
 **
 * @example
 * import { css } from '@emotion/css';
 *
 * const bodyFontSizeStyle = css`
 *  font-size: 1.2rem; // 0 ~ sm
 *
 *  ${media.sm} { // sm ~ md
 *    font-size: 1.5rem;
 *  }
 *  ${media.md} { // md ~ lg
 *    font-size: 1.8rem;
 *  }
 *  ${media.lg} { // lg ~
 *    font-size: 2.5rem;
 *  }
 * `
 */
const media: Media = {
  sm: `@media only screen and (min-width: ${mediaBreakpoints.sm}px)`,
  md: `@media only screen and (min-width: ${mediaBreakpoints.md}px)`,
  lg: `@media only screen and (min-width: ${mediaBreakpoints.lg}px)`,
};

export default media;
