import { styled } from "@components/styles";
import { borders, BordersProps, color, ColorProps, position, PositionProps, space, SpaceProps } from "styled-system";

export interface BoxProps extends SpaceProps, ColorProps, PositionProps, BordersProps {

}

export const Box = styled.div<BoxProps>`
  ${space}
  ${color}
  ${position}
  ${borders}
`
