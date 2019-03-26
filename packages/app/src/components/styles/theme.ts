export interface ThemeInterface {

  fontSizes: number[];
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

  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64, 72
  ],
  space: [
    // margin and padding
    0, 4, 8, 16, 32, 64, 128, 256, 512
  ],

  colors: {
    black: ["#26353f", "#0c0c0e"],
    blue: ["#1E74FC", "#2263FF", "#0063FF"],
    grey: ["#EEEEEE", "#666666", "#333333"],
    red: "#FF6558",
    white: "#FFFFFF",
  }


}
