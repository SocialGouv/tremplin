import { JobOfferListItem } from "@components/jobOffers";
import { Container } from "@components/layout/Container";
import PageLayout from "@components/layout/PageLayout";
import { JobOffer } from "@domain";
import { jobOfferRepository } from "@repository";
import { useEffect, useState } from "react";

export default () => {

  const [jobOffers, setJobOffers] = useState<JobOffer[]>([]);

  useEffect(() => {
    const subscription = jobOfferRepository().findAll().subscribe(res => { setJobOffers(res); });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <PageLayout>
      <Container>
        <h1>Offres</h1>
        <ul>
          {jobOffers.map(jobOffer => <JobOfferListItem key={jobOffer.reference} jobOffer={jobOffer}></JobOfferListItem>)}
        </ul>
      </Container>
    </PageLayout>
  )
}
