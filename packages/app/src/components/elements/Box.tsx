import { styled, typographyStyle, TypographyProps } from "@components/styles";
import { backgroundImage, BackgroundImageProps, backgroundPosition, BackgroundPositionProps, backgroundRepeat, BackgroundRepeatProps, border, BorderProps, borders, BordersProps, color, ColorProps, height, HeightProps, position, PositionProps, space, SpaceProps } from "styled-system";

export interface BoxProps extends SpaceProps, ColorProps, PositionProps, BorderProps, BordersProps, BackgroundImageProps, BackgroundPositionProps, BackgroundRepeatProps, HeightProps, TypographyProps {

}

export const Box = styled.div<BoxProps>`
  ${space}
  ${color}
  ${position}
  ${border}
  ${borders}

  ${backgroundImage}
  ${backgroundPosition}
  ${backgroundRepeat}

  ${height}

  ${typographyStyle}

`
