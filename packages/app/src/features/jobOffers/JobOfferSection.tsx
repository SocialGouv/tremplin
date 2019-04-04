import { Box } from "@components/elements";
import { Text } from "@components/elements/Text";
import { Component } from "react";

export class JobOfferSection extends Component<{ title?: string }> {

  public render() {
    return (
      <Box pb={3}>
        {this.props.title && <Text as="div" fontSize={6} color="blue.1" pb={2}>{this.props.title}</Text>}
        {this.props.children}
      </Box>
    )
  }
}

export const JobOfferSectionContent = (props: { content: string }) => {
  return (
    <Text pb={4} fontSize={2} color="black.1" lineHeight="24px">
      <div dangerouslySetInnerHTML={{ __html: `${props.content}` }} />
    </Text>
  )
}
