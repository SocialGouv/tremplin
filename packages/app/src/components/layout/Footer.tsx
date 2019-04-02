import { Box } from "@components/elements";
import { Text } from "@components/elements/Text";
import { Component } from "react";
import { Container } from "./Container";
import { Flex, Item } from "./flex/Flex";

export class Footer extends Component<{}> {

  public render() {
    return (
      <Box bg="rgba(184, 196, 204, 0.2)">
        <Container>
          <Flex>
            <Item>
              <img src="/static/assets/img/marianne.svg"></img>
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
