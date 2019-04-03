import { Box } from "@components/elements";
import { Text } from "@components/elements/Text";
import { Component } from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { Flex, Item } from "./flex/Flex";
import { Marianne } from "./marianne";

const StyledLink = styled.a`
   text-decoration: none;
   color: inherit;
`

export class Footer extends Component<{}> {

  public render() {
    return (
      <Box bg="rgba(184, 196, 204, 0.2)" height="250px">
        <Container>
          <Box paddingTop={3}>
            <Flex>
              <Item >
                <Marianne width="150px" height="82px"></Marianne>
              </Item>
              <Item>
                <Box paddingTop={4} paddingBottom={5} paddingLeft={6}>
                  <Text as="div" fontSize={4} color="black.1">Un projet conçu au sein de l’incubateur des ministères sociaux.</Text>
                </Box>
                <Box paddingTop={3} paddingBottom={3} paddingLeft={6}>
                  <Text color="grey.1" fontSize={2}>© 2019 Tremplin | <StyledLink href="mailto:contact@tremplin.beta.gouv.fr">Contact</StyledLink></Text>
                </Box>
              </Item>
            </Flex>
          </Box>
        </Container>
      </Box>
    )
  }

}
