import { ThemeInterface } from '@styles/theme';
import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };

export default styled;

const sizes: any = {
  desktop: 992,
  phone: 576,
  tablet: 768,
}

export const media: {
  desktop: styledComponents.ThemedCssFunction<any>,
  phone: styledComponents.ThemedCssFunction<any>,
  tablet: styledComponents.ThemedCssFunction<any>
} = Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (first: TemplateStringsArray | styledComponents.CSSObject,
    ...interpolations: styledComponents.SimpleInterpolation[]) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(first, ...interpolations)}
    }
  `
  return acc
}, {});
