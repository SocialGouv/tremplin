import { styled, TypographyProps, typographyStyle } from "@styles";
import { alignContent, AlignContentProps, alignItems, AlignItemsProps, backgroundImage, BackgroundImageProps, backgroundPosition, BackgroundPositionProps, backgroundRepeat, BackgroundRepeatProps, border, borderColor, BorderColorProps, BorderProps, borders, BordersProps, bottom, BottomProps, color, ColorProps, display, DisplayProps, flex, flexDirection, FlexDirectionProps, FlexProps, flexWrap, FlexWrapProps, height, HeightProps, justifyContent, JustifyContentProps, maxHeight, MaxHeightProps, maxWidth, MaxWidthProps, position, PositionProps, space, SpaceProps, textAlign, TextAlignProps, width, WidthProps, zIndex, ZIndexProps, backgroundSize, BackgroundSizeProps } from "styled-system";

export interface BoxProps extends BackgroundSizeProps, MaxHeightProps, FlexProps, FlexWrapProps, AlignContentProps, AlignItemsProps, JustifyContentProps, FlexDirectionProps, DisplayProps, MaxWidthProps, TextAlignProps, FlexProps, BorderColorProps, ZIndexProps, BottomProps, WidthProps, SpaceProps, ColorProps, PositionProps, BorderProps, BordersProps, BackgroundImageProps, BackgroundPositionProps, BackgroundRepeatProps, HeightProps, TypographyProps {

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
  ${backgroundSize}

 /* POSITION */
  ${position}
  ${bottom}
  ${zIndex}

  /*LAYOUT*/
  ${height}
  ${width}
  ${maxWidth}
  ${maxHeight}
  ${display}

  /*FLEX WRAPPER*/
  ${flex}
  ${flexDirection}
  ${alignContent}
  ${justifyContent}
  ${alignItems}
  ${flexWrap}
  /*FLEX ITEM*/
  ${flex}

  ${textAlign}

  ${typographyStyle}

`
