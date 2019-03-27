import { styled } from "@components/styles";
import { backgroundImage, BackgroundImageProps, backgroundPosition, BackgroundPositionProps, backgroundRepeat, BackgroundRepeatProps, borders, BordersProps, color, ColorProps, position, PositionProps, space, SpaceProps } from "styled-system";

export interface BoxProps extends SpaceProps, ColorProps, PositionProps, BordersProps, BackgroundImageProps, BackgroundPositionProps, BackgroundRepeatProps {

}

export const Box = styled.div<BoxProps>`
  ${space}
  ${color}
  ${position}
  ${borders}
  ${backgroundImage}
  ${backgroundPosition}
  ${backgroundRepeat}

`
