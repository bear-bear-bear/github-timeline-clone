export type Screen = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const mediaBreakpoints: Record<Screen, number> = {
  xs: 576, // 이하
  sm: 576, // 이상
  md: 768, // 이상
  lg: 992, // 이상
  xl: 1200, // 이상
  xxl: 1600, // 이상
};

/**
 * @namespace
 * @property {string} xs - 576px 이하
 * @property {string} sm - 576px 이상
 * @property {string} md - 768px 이상
 * @property {string} lg - 992px 이상
 * @property {string} xl - 1200px 이상
 * @property {string} xxl - 1600px 이상
 *
 * @desc
 * 템플릿 리터럴 내부(emotion styled 등)에서 사용합니다.
 * 기본 사이즈를 모바일 사이즈(576px 이하일 때의 스타일)로 정의하고
 * 아래 예시처럼 다른 스크린 사이즈의 스타일을 정의하시면 됩니다.
 *
 * @example
 * const MyStyledComponent = styled.h1`
 *  font-size: 1.2rem; // xs(default style) - 576px 이하
 *
 *  ${media.sm} { // 576px 이상
 *    font-size: 1.5rem;
 *  }
 *  ${media.md} { // 768px 이상
 *    font-size: 1.8rem;
 *  }
 *  ${media.lg} {  // 992px 이상
 *    font-size: 2.5rem;
 *  }
 *  ${media.xl} { // 1200px 이상
 *    font-size: 2.5rem;
 *  }
 *  ${media.xxl} { // 1600px 이상
 *    font-size: 2.5rem;
 *  }
 * `
 */
const media = {
  xs: `@media only screen and (max-width: ${mediaBreakpoints.xs}px)`,
  sm: `@media only screen and (min-width: ${mediaBreakpoints.sm}px)`,
  md: `@media only screen and (min-width: ${mediaBreakpoints.md}px)`,
  lg: `@media only screen and (min-width: ${mediaBreakpoints.lg}px)`,
  xl: `@media only screen and (min-width: ${mediaBreakpoints.xl}px)`,
  xxl: `@media only screen and (min-width: ${mediaBreakpoints.xxl}px)`,
};

export default media;
