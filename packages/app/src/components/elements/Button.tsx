import styled from "styled-components";
import { buttonStyle, ButtonStyleProps } from "styled-system";

export const Button = styled.button<ButtonStyleProps>`
  ${buttonStyle}
  border-radius: 4px;
  padding: 15px 25px;
  outline: none;
  cursor: pointer;
  margin: 5px;
`
