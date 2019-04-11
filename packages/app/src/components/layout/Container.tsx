import { css, styled } from "@styles";

interface ContainerProps {
  full?: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 0 10% 0 10%;
  margin: 0px;
  overflow: auto;
  ${props => props.full && css`height: 100%; `}
`;
