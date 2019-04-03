import styled from "styled-components";
import { buttonStyle, ButtonStyleProps, display, DisplayProps, width, WidthProps } from "styled-system";

export interface ButtonProps extends ButtonStyleProps, DisplayProps, WidthProps {

}

export const Button = styled.button<ButtonProps>`
  ${buttonStyle}
  ${display}
  ${width}
  border-radius: 4px;
  padding: 15px 25px;
  outline: none;
  cursor: pointer;
  margin: 5px;
`
