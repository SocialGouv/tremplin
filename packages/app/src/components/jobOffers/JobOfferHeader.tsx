import { Box } from "@components/elements";
import { Text } from "@components/elements/Text";
import { Component } from "react";

export class JobOfferHeader extends Component<{ imgUrl: string, title: string, hint: string }> {

  public render() {
    return (
      <Box pr="10%" pl="10%" m="0" pt={7} pb={5} backgroundImage={this.props.imgUrl} backgroundPosition="center" backgroundRepeat="no-repeat">
        <Text as="div" fontSize={7} color="white" paddingBottom={1} >{this.props.title}</Text>
        <Text as="div" fontSize={3} color="white" >{this.props.hint}</Text>
      </Box>
    )
  }

}

