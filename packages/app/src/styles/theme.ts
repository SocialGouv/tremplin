import { border } from 'styled-system';

type ButtonStyleType = Readonly<{
  color: string;
  backgroundColor: string;
  fontSize: number;
  border: string;
}>;

export interface ThemeInterface {
  fonts: string[];
  fontSizes: number[];
  fontWeights: number[];
  space: number[];
  lineHeights: number[];
  colors: {
    black: string[],
    blue: string[],
    brown: string[],
    grey: string[],
    red: string,
    white: string
  },
  buttons: {
    primary: ButtonStyleType;
    inverse: ButtonStyleType;
  }

}

const colorWhite = "#FFFFFF";
const colorRed = "#FF6558";

export const theme: ThemeInterface = {

  fonts: ["Roboto", "Roboto Condensed"],

  fontSizes: [
    12, 14, 16, 18, 20, 22, 24, 32, 48, 64, 72
  ],
  fontWeights: [
    100, 200, 300, 400, 500, 600, 700, 800
  ],
  space: [
    // margin and padding
    0, 4, 8, 16, 32, 64, 128, 256, 512
  ],

  lineHeights: [
    0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2
  ],

  colors: {
    black: [
      "rgba(51, 51, 51, 1)",
      "rgba(51, 51, 51, 0.9)",
      "rgba(51, 51, 51, 0.8)",
      "rgba(51, 51, 51, 0.7)",
      "rgba(51, 51, 51, 0.6)",
      "rgba(51, 51, 51, 0.5)",
      "rgba(51, 51, 51, 0.4)",
      "rgba(51, 51, 51, 0.3)",
      "rgba(51, 51, 51, 0.2)"
    ],
    blue: [
      "rgba(0, 105, 204, 1)",
      "rgba(0, 105, 204, 0.9)",
      "rgba(0, 105, 204, 0.8)",
      "rgba(0, 105, 204, 0.7)",
      "rgba(0, 105, 204, 0.6)",
      "rgba(0, 105, 204, 0.5)",
      "rgba(0, 105, 204, 0.4)",
      "rgba(0, 105, 204, 0.3)",
      "rgba(0, 105, 204, 0.2)",
    ],
    brown: [
      "rgba(145, 97, 19, 1)",
      "rgba(145, 97, 19, 0.9)",
      "rgba(145, 97, 19, 0.8)",
      "rgba(145, 97, 19, 0.7)",
      "rgba(145, 97, 19, 0.6)",
      "rgba(145, 97, 19, 0.5)",
      "rgba(145, 97, 19, 0.4)",
      "rgba(145, 97, 19, 0.3)",
      "rgba(145, 97, 19, 0.2)",
      "rgba(145, 97, 19, 0.1)",
    ],
    grey: [
      "rgba(94, 109, 119, 1)",
      "rgba(94, 109, 119, 0.9)",
      "rgba(94, 109, 119, 0.8)",
      "rgba(94, 109, 119, 0.7)",
      "rgba(94, 109, 119, 0.6)",
      "rgba(94, 109, 119, 0.5)",
      "rgba(94, 109, 119, 0.4)",
      "rgba(94, 109, 119, 0.3)",
      "rgba(94, 109, 119, 0.2)",
    ],
    red: colorRed,
    white: colorWhite,
  },
  // tslint:disable-next-line: object-literal-sort-keys
  buttons: {
    primary: {
      backgroundColor: colorRed,
      border: `solid 1px ${colorWhite}`,
      color: colorWhite,
      fontSize: 15
    },
    // tslint:disable-next-line: object-literal-sort-keys
    inverse: {
      backgroundColor: colorWhite,
      border: `solid 1px ${colorRed}`,
      color: colorRed,
      fontSize: 15
    }
  }
}
