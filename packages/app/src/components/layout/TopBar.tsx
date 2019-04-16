import { Box } from "@components/elements";
import { Text } from "@components/elements/Text";
import { media, styled } from "@styles";
import { Container } from "./Container";
import { Marianne } from "./marianne";

const BrandName = styled(Box)`
  cursor: pointer;
`

const BetaGouvLink = styled.a`
  text-decoration: none;
`

export const TopBar = () => {
  return (
    <Box bg="color.white" height="100px" border="1px solid #CCCCCC" >
      <Container full>
        <Box display="flex" pt={3} pb={2} alignItems="center">
          <Marianne height="30px" width="60px"></Marianne>
          <BetaGouvLink href="https://beta.gouv.fr/startups/tremplin.html" target="_BLANK">
            <BrandName pl={4}>
              <Text as="h1" fontSize={9} color="blue.1" pr={3} pb={1} fontFamily="1">Tremplin</Text>
              <Text as="div" fontSize={2} color="grey.1" pr={3} fontFamily="1" >Territoire REMPLacement INstallation</Text>
            </BrandName>
          </BetaGouvLink>
          <Box pl={4} display={["none", "block", "block"]}>
            <Text fontSize={2} color="grey.1" fontFamily="1" >Rapprocher les professionnels de santé de leur futur territoire d’exercice</Text>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
