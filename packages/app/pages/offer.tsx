import { JobOfferBlock, JobOfferBlockHeader, JobOfferContacts, JobOfferHeader, JobOfferMap, JobOfferSection, JobOfferSectionContent } from '@components/jobOffers';
import { Item, PageLayout } from '@components/layout';
import { Flex } from '@components/layout/flex/Flex';
import { media, styled } from '@components/styles';
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
        <JobOfferBlockHeader title={jobOffer.title} />
      </JobOfferBlock>
      <JobOfferBlock>
        <JobOfferBlockHeader title="Lieu d'exercice" />
        <Flex justifyBetween>
          <Item basis="calc(50% - 10px)">
            <JobOfferMap address={jobOffer.address}></JobOfferMap>
          </Item>
          <Item basis="calc(50% - 10px)">
            <JobOfferSection title="Condition d'exercice">
              <JobOfferSectionContent content={jobOffer.workCondition} />
            </JobOfferSection>
            <JobOfferSection title="Structure d'accueil">
              <JobOfferSectionContent content={jobOffer.medicalStructure} />
            </JobOfferSection>
          </Item>
        </Flex>
      </JobOfferBlock>
      <JobOfferBlock>
        <JobOfferBlockHeader title="Cadre de vie" />
        <Flex justifyBetween>
          <Item basis="calc(50% - 10px)">
            <JobOfferSection title="Vie de famille, employabilité, loisirs">
              <JobOfferSectionContent content={jobOffer.lifestyleFamily} />
            </JobOfferSection>
          </Item>
          <Item basis="calc(50% - 10px)">
            <JobOfferSection title="Territoire">
              <JobOfferSectionContent content={jobOffer.lifestyleTerritory} />
            </JobOfferSection>
          </Item>
        </Flex>
      </JobOfferBlock>
      <JobOfferContacts contacts={jobOffer.contacts} />
    </PageLayout >
  );
}

export default withRouter<JobOfferProps>(JobOfferPage);
