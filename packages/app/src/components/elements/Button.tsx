import styled from "styled-components";
import { color, ColorProps, fontSize, FontSizeProps } from "styled-system";

interface ButtonProps extends ColorProps, FontSizeProps {

}

export const Button = styled.button<ButtonProps>`
  border-radius: 5px;
  padding: 20px 20px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 5px;
  ${color}
  ${fontSize}
`
