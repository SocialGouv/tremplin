import { Box } from "@components/elements";
import { Text } from "@components/elements/Text";
import { styled } from "@styles";
import { Component } from "react";
import { Container } from "./Container";
import { Marianne } from "./marianne";

const StyledLink = styled.a`
   text-decoration: none;
   color: inherit;
`

export class Footer extends Component<{}> {

  public render() {
    return (
      <Box bg="grey.9" height="250px">
        <Container>
          <Box display="flex" paddingTop={3} alignContent={["center", "flex-start", "flex-start"]} alignItems={["flex-start", "center", "center"]} flexDirection={["column", "row", "row"]}>
            <Box flex="0 1 auto" pb={2}>
              <Marianne width={["65px","150px","150px"]} height={["40px","82px","82px"]}></Marianne>
            </Box>
            <Box paddingLeft={[0, 4, 4]} flex="0 1 auto">
              <Text as="div" fontSize={[3,4,4]} color="rgba(51, 51, 51, 0.7)">Un projet conçu au sein de l’incubateur des ministères sociaux.</Text>
            </Box>
          </Box>
          <Box paddingTop={3} paddingBottom={3} >
            <Text color="black.0" fontSize={2}>© 2019 Tremplin | <StyledLink href="mailto:contact@tremplin.beta.gouv.fr">Contact</StyledLink></Text>
          </Box>
        </Container>
      </Box>
    )
  }

}
