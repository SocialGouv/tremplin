import { Box } from "@components/elements";
import { Text } from "@components/elements/Text";
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
      <Box bg="rgba(11, 86, 176)" height="200px" textAlign="center" paddingTop={4}>
        <Text as="div" color="white" fontSize={7} pb={5}>Tremplin</Text>
        <Text as="div" color="white" fontSize={6} pt={2}>Rapprocher les professionnels de santé de leur futur territoire d’exercice</Text>
      </Box>
      <Box bg="#ebeff3" height="150px" textAlign="center" paddingTop={4}>
        <Text color="white" fontSize={6} lineHeight="130px">
          <a href="https://beta.gouv.fr/startups/tremplin.html">Accéder à la fiche de la startup d'état</a>
        </Text>
      </Box>
      <Box bg="#fff0e4" height="40px" textAlign="center" pt={3} >
        <Text fontSize={1} >Le produit est en construction, il n'est pas encore accessible au public.</Text>
      </Box>
      {process.env.NODE_ENV === 'development' &&
        <Container>
          <ul>
            {jobOffers.map(jobOffer => <JobOfferListItem key={jobOffer.reference} jobOffer={jobOffer}></JobOfferListItem>)}
          </ul>
        </Container>}

    </PageLayout>
  )
}
