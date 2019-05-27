import { Box } from "@components/elements";
import { Text } from "@components/elements/Text";
import { styled } from "@styles";
import { Component, Fragment, useState } from "react";
import { rawTextToHtml } from "./util/jobOfferUtil";

export class JobOfferSection extends Component<{ title?: string }> {

  public render() {
    return (
      <Box pt={1} pb={1} >
        {this.props.title && <Text as="div" fontSize={4} color="blue.1" pb={2}>{this.props.title}</Text>}
        {this.props.children}
      </Box>
    )
  }
}

const ContentWrapper = styled(Box)({
  overflow: "hidden"
});

const Button = styled.button`
  border-radius: 24px;
  border: solid 1px rgba(51, 51, 51, 0.2);
  width: 170px;
  height: 48px;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #0081d5;
`


export const JobOfferSectionContent = (props: { content: string }) => {

  const maxHeightValue = "max-content";
  const minHeightValue = "100px";

  const [maxHeight, setMaxHeight] = useState(minHeightValue);

  return (
    <Fragment>
      <ContentWrapper maxHeight={[maxHeight, maxHeightValue, maxHeightValue]}>
        <Text fontSize={2} color="black.1" lineHeight="24px">
          <div dangerouslySetInnerHTML={{ __html: `${rawTextToHtml(props.content)}` }} />
        </Text>
      </ContentWrapper>
      <Box display={["flex", "none", "none"]} justifyContent="center" pt={3}>
        {maxHeight !== maxHeightValue && <Button onClick={() => setMaxHeight(maxHeightValue)}>Voir plus</Button>}
        {maxHeight === maxHeightValue && <Button onClick={() => setMaxHeight(minHeightValue)}>Voir moins</Button>}
      </Box>
    </Fragment>
  )
}
