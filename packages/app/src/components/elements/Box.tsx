import { styled, TypographyProps, typographyStyle } from "@components/styles";
import { backgroundImage, BackgroundImageProps, backgroundPosition, BackgroundPositionProps, backgroundRepeat, BackgroundRepeatProps, border, BorderProps, borders, BordersProps, bottom, BottomProps, color, ColorProps, height, HeightProps, position, PositionProps, space, SpaceProps, width, WidthProps, zIndex, ZIndexProps, borderColor, BorderColorProps, flex, FlexProps, textAlign, TextAlignProps } from "styled-system";

export interface BoxProps extends TextAlignProps, FlexProps, BorderColorProps, ZIndexProps, BottomProps, WidthProps, SpaceProps, ColorProps, PositionProps, BorderProps, BordersProps, BackgroundImageProps, BackgroundPositionProps, BackgroundRepeatProps, HeightProps, TypographyProps {

}

export const Box = styled.div<BoxProps>`
  ${space}
  ${color}

  /*MISC*/
  ${border}
  ${borders}
  ${borderColor}

  /* BACKGROUND */
  ${backgroundImage}
  ${backgroundPosition}
  ${backgroundRepeat}

 /* POSITION */
  ${position}
  ${bottom}
  ${zIndex}

  /*LAYOUT*/
  ${height}
  ${width}
  ${flex}

  ${textAlign}

  ${typographyStyle}

`
