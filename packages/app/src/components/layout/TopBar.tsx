import { Box } from "@components/elements";
import { Text } from "@components/elements/Text";
import Link from "next/link";
import { Container } from "./Container";
import { Flex, Item } from "./flex/Flex";

export const TopBar = () => {
  return (
    <Box bg="color.white" height="100px" border="1px solid #CCCCCC" >
      <Container full>
        <Flex full alignCenter noResponsive>
          <Item>
            <Link href="/">
              <Text as="a" fontSize={7} color="blue.1" fontFamily="Roboto Condensed" pr={3} className="topbar__brand">Tremplin</Text>
            </Link>
          </Item>
          <Item basis="250px">
            <Text fontSize={2} color="grey.1" fontFamily="Roboto Condensed" >Rapprocher les professionnels de santé de leur futur territoire d’exercie</Text>
          </Item>
        </Flex>
      </Container>
    </Box>
  )
}
