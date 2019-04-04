import Link from "next/link";
import React, { Component } from 'react';
import { JobOfferProps } from "./JobOfferProps";



export class JobOfferListItem extends Component<JobOfferProps> {

  public render() {
    return (<li>
      <Link href={`/offer?reference=${this.props.jobOffer.reference}`}>
        <a>{this.props.jobOffer.title}</a>
      </Link>
    </li>)
  }

}
