import { color, ColorProps, compose, fontFamily, FontFamilyProps, fontSize, FontSizeProps, fontWeight, FontWeightProps, lineHeight, LineHeightProps, space, SpaceProps } from "styled-system";

export const typographyStyle = compose(
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color
)

export interface TypographyProps extends FontFamilyProps, FontSizeProps, FontWeightProps, LineHeightProps, SpaceProps, ColorProps {

}

