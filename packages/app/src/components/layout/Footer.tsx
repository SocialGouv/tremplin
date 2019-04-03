import { Box } from "@components/elements";
import { Text } from "@components/elements/Text";
import { Component } from "react";
import { Container } from "./Container";
import { Flex, Item } from "./flex/Flex";
import { Marianne } from "./marianne";

export class Footer extends Component<{}> {

  public render() {
    return (
      <Box bg="rgba(184, 196, 204, 0.2)" height="250px">
        <Container>
          <Flex>
            <Item>
              <Marianne width="150px" height="82px"></Marianne>
            </Item>
            <Item>
              <Text>Un projet conçu au sein de l’incubateur des ministères sociaux.</Text>
              <div>
                <span>© 2019 Tremplin</span>
                <span> | </span>
                <a>Mentions légales</a>
                <span> | </span>
                <a>Données personnelles</a>
                <span> | </span>
                <a>Accessibilité</a>
                <span> | </span>
                <a>Contact</a>
              </div>
            </Item>
          </Flex>
        </Container>
      </Box>
    )
  }

}
