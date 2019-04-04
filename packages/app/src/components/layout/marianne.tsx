import { Box } from "@components/elements";
import { styled } from "@styles";

const Image = styled.img`
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export const Marianne = (props: { height: string, width: string }) => {
  return (
    <Box padding={1} bg="white" width={props.width} height={props.height} borderColor="grey.5" border="1px solid">
      <Image src="/static/assets/img/marianne.svg"></Image>
    </Box>
  )
}
