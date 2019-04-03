import { styled, TypographyProps, typographyStyle } from "@components/styles";
import { alignItems, AlignItemsProps, backgroundImage, BackgroundImageProps, backgroundPosition, BackgroundPositionProps, backgroundRepeat, BackgroundRepeatProps, border, borderColor, BorderColorProps, BorderProps, borders, BordersProps, bottom, BottomProps, color, ColorProps, display, DisplayProps, flex, flexDirection, FlexDirectionProps, FlexProps, height, HeightProps, justifyContent, JustifyContentProps, maxWidth, MaxWidthProps, position, PositionProps, space, SpaceProps, textAlign, TextAlignProps, width, WidthProps, zIndex, ZIndexProps } from "styled-system";

export interface BoxProps extends AlignItemsProps, JustifyContentProps, FlexDirectionProps, DisplayProps, MaxWidthProps, TextAlignProps, FlexProps, BorderColorProps, ZIndexProps, BottomProps, WidthProps, SpaceProps, ColorProps, PositionProps, BorderProps, BordersProps, BackgroundImageProps, BackgroundPositionProps, BackgroundRepeatProps, HeightProps, TypographyProps {

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
  ${maxWidth}
  ${display}

  /*FLEX WRAPPER*/
  ${flex}
  ${flexDirection}
  ${justifyContent}
  ${alignItems}

  ${textAlign}

  ${typographyStyle}

`
