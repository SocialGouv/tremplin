import { Box, Icon } from '@components/elements';
import { Text } from '@components/elements/Text';
import { JobOfferBlock, JobOfferBlockHeader, JobOfferBlockHeader1, JobOfferContacts, JobOfferHeader, JobOfferMap, JobOfferSection, JobOfferSectionContent } from '@components/jobOffers';
import { Item, PageLayout } from '@components/layout';
import { Flex } from '@components/layout/flex/Flex';
import { asString } from '@components/utils';
import { fakeJobOffer, JobOffer } from '@domain';
import { jobOfferRepository } from '@repository';
import { SingletonRouter, withRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface JobOfferProps {
  router: SingletonRouter;
}

const JobOfferPage = (props: JobOfferProps) => {

  const [jobOffer, setJobOffer] = useState<JobOffer>(fakeJobOffer);

  useEffect(() => {
    const reference = asString(props.router, 'reference');
    if (reference == null) {
      return;
    }
    const subscription = jobOfferRepository().findOne(reference).subscribe(res => { setJobOffer(res); });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <PageLayout>
      <JobOfferHeader imgUrl="url('static/assets/photos/heading.jpg')" />
      <JobOfferBlock>
        <JobOfferBlockHeader1 title={jobOffer.title} />
        <Box pb={3}>
          <Icon color="rgba(0, 105, 204, 0.87)" user></Icon>
          <Text pl={2} fontSize={2}>{jobOffer.contractType} en {jobOffer.structureType} | Offre publiée le 2 avril 2019 à 18h</Text>
        </Box>
        <Flex justifyBetween>
          <Item basis="calc(50% - 10px)" >
            <Box marginTop="10%">
              <Box pt={3} pb={3}><Icon size="lg" color="#ff6558" star></Icon><Text pl={2} >{jobOffer.advantage1}</Text></Box>
              <Box pt={3} pb={3}><Icon size="lg" color="#ff6558" star></Icon><Text pl={2} >{jobOffer.advantage2}</Text></Box>
              <Box pt={3} pb={3}><Icon size="lg" color="#ff6558" star></Icon><Text pl={2} >{jobOffer.advantage3}</Text></Box>
            </Box>
          </Item>
          <Item basis="calc(50% - 10px)">
            <JobOfferMap address={jobOffer.address}></JobOfferMap>
          </Item>
        </Flex>
      </JobOfferBlock>

      <JobOfferBlock>
        <JobOfferBlockHeader title="Conditions d'exercice" >
          <Box pb={3}>
            {jobOffer.secretariatType.map((sec, index) => <Text key={index} color="grey.1" fontSize={4} pr={3} >• {sec}</Text>)}
          </Box>
        </JobOfferBlockHeader>
        <JobOfferSection>
          <JobOfferSectionContent content={jobOffer.workCondition} />
        </JobOfferSection>
      </JobOfferBlock>

      <JobOfferBlock>
        <JobOfferBlockHeader title="Structure d'accueil" >
          <Box pb={3}>
            <Text color="grey.1" fontSize={4} pr={3} >• Urgences les plus proches à {jobOffer.emergencyDistance} km</Text>
          </Box>
        </JobOfferBlockHeader>

        <JobOfferSection>
          <JobOfferSectionContent content={jobOffer.medicalStructure} />
        </JobOfferSection>
      </JobOfferBlock>

      <JobOfferBlock grey>
        <JobOfferBlockHeader title="Cadre de vie" />
        <JobOfferSection title="Vie de famille">
          <JobOfferSectionContent content={jobOffer.lifestyleFamily} />
        </JobOfferSection>
        <JobOfferSection title="Territoire">
          <JobOfferSectionContent content={jobOffer.lifestyleTerritory} />
        </JobOfferSection>
      </JobOfferBlock>
      <JobOfferContacts contacts={jobOffer.contacts} />
    </PageLayout >
  );
}

export default withRouter<JobOfferProps>(JobOfferPage);
