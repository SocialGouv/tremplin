import { Box } from "@components/elements";
import { Text } from "@components/elements/Text";
import { styled } from "@styles";
import Link from "next/link";
import React, { Component } from 'react';
import { JobOfferProps } from "./JobOfferProps";
import { getFirstImagePath } from "./util/jobOfferUtil";


const Card = styled(Box)`
  :hover {
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  }
`


export class JobOfferCard extends Component<JobOfferProps> {

  public render() {
    return (
      <Link href={`/offer?reference=${this.props.jobOffer.reference}`}>
        <Card width="300px" border="1px solid" borderColor="grey.8" m={3}>
          <Box width="100%" height="200px" backgroundSize="cover" backgroundImage={`url('${getFirstImagePath(this.props.jobOffer)}')`} backgroundPosition="center" backgroundRepeat="no-repeat" />
          <Box p={3} textAlign="center">
            <Text color="grey.0" lineHeight={3} fontSize={2}>{this.props.jobOffer.title}</Text>
          </Box>
        </Card>
      </Link>
    )
  }

}
