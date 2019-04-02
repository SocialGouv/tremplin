import { Box } from "@components/elements";
import { Text } from "@components/elements/Text";
import { Container } from "./Container";
import { Flex, Item } from "./flex/Flex";

export const TopBar = () => {
  return (
    <Box bg="color.white" height="100px" border="1px solid #CCCCCC" >
      <Container full>
        <Flex full alignCenter noResponsive>
          <Item>
            <img height="30px" width="60px" src="/static/assets/img/marianne.svg"></img>
          </Item>
          <Item>
            <Box pl={4}>
              <Text as="div" fontSize={7} color="blue.1" pr={3} pb={1} fontFamily="1">Tremplin</Text>
              <Text as="div" fontSize={2} color="grey.1" pr={3} fontFamily="1" >Territoire REMPLacement INstallation</Text>
            </Box>
          </Item>
          <Item>
            <Box pl={4}>
              <Text fontSize={2} color="grey.1"fontFamily="1" >Rapprocher les professionnels de santé de leur futur territoire d’exercie</Text>
            </Box>
          </Item>
        </Flex>
      </Container>
    </Box>
  )
}
