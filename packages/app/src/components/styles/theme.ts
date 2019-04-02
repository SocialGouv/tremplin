export interface ThemeInterface {
  fonts: string[];
  fontSizes: number[];
  fontWeights: number[];
  space: number[];
  colors: {
    black: string[],
    blue: string[],
    grey: string[],
    red: string,
    white: string
  }

}

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

  colors: {
    black: ["#26353f", "#0c0c0e"],
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
    red: "#FF6558",
    white: "#FFFFFF",
  }
}
