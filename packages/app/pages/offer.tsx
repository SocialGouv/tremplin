import { fakeJobOffer, JobOffer, jobOfferRepository } from '@api';
import { Box, Icon } from '@components/elements';
import { Text } from '@components/elements/Text';
import { PageLayout } from '@components/layout';
import { JobOfferBlock, JobOfferBlockHeader1, JobOfferBlockHeader2, JobOfferContacts, JobOfferHeader, JobOfferMap, JobOfferSection, JobOfferSectionContent } from '@features/jobOffers';
import { styled } from '@styles';
import { asString } from '@util';
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
      <JobOfferHeader jobOffer={jobOffer} />
      <JobOfferBlock>
        <JobOfferBlockHeader1 jobOffer={jobOffer} />
        <Box pt={3} display="flex" justifyContent="space-between" flexDirection={["column", "row", "row"]}>
          <Box display="flex" flexDirection="column" justifyContent="space-around" pb={2} flex="0 1 calc(50% - 10px)">
            <AdvantageBox advantage={jobOffer.advantage1} />
            <AdvantageBox advantage={jobOffer.advantage2} />
            <AdvantageBox advantage={jobOffer.advantage3} />
          </Box>
          <Box flex="0 1 calc(50% - 10px)" pt={[2, 0, 0]}>
            <JobOfferMap address={jobOffer.address}></JobOfferMap>
          </Box>
        </Box>
      </JobOfferBlock>
      <JobOfferBlock>
        <JobOfferBlockHeader2 title="Conditions d'exercice" />
        <Box display="flex" flexDirection={["column", "row", "row"]}>
          {jobOffer.secretariatType.map((sec, index) => <SectionHint key={index} hint={sec} />)}
        </Box>
        <JobOfferSection>
          <JobOfferSectionContent content={jobOffer.workCondition} />
        </JobOfferSection>
      </JobOfferBlock>

      <JobOfferBlock color='grey'>
        <JobOfferBlockHeader2 title="Quelques photos" />
        <JobOfferSection>
          <GalleryPhoto>
            <Box display="flex" flexDirection="row" alignItems="flex-start">
              {jobOffer.photos.map((photo, index) => <Box pr={3} key={index}><img alt={photo.description} height="235px" src={`static/assets/photos/${jobOffer.reference}/${photo.name}`}></img></Box>)}
            </Box>
          </GalleryPhoto>
        </JobOfferSection>
      </JobOfferBlock>

      <JobOfferBlock>
        <JobOfferBlockHeader2 title="Structure d'accueil" />
        <Box display="flex">
          <SectionHint hint={`Urgences les plus proches à ${jobOffer.emergencyDistance} km`} />
        </Box>
        <JobOfferSection>
          <JobOfferSectionContent content={jobOffer.medicalStructure} />
        </JobOfferSection>
      </JobOfferBlock>

      <JobOfferBlock color='brown'>
        <JobOfferBlockHeader2 title="Cadre de vie" />
        <Box display="flex" flexDirection={["column", "row", "row"]} justifyContent="space-between">
          <Box flex="0 1 calc(70% - 10px)">
            <JobOfferSection title="Vie de famille" >
              <JobOfferSectionContent content={jobOffer.lifestyle} />
            </JobOfferSection>
          </Box>
          <Box flex="0 1 calc(30% - 10px)" pt={[3, 0, 0]}>
            <JobOfferSection title="Quelques liens">
              {jobOffer.lifestyleLinks.map((link, index) => <LifestyleLink key={index} link={link.link} description={link.description}></LifestyleLink>)}
            </JobOfferSection>
          </Box>
        </Box>
      </JobOfferBlock>

      <JobOfferBlock >
        <JobOfferBlockHeader2 title="Aide à" />
        <JobOfferSection >
          <JobOfferSectionContent content={jobOffer.lifestyle} />
        </JobOfferSection>
      </JobOfferBlock>

      <JobOfferContacts contacts={jobOffer.contacts} />
    </PageLayout >
  );
};


const SectionHint = (props: { hint: string }) => <Text color="grey.2" fontSize={[3, 4, 4]} pb={2} pr={3} >• {props.hint}</Text>;

const GalleryPhoto = styled(Box)({
  overflowX: 'auto',
  overflowY: 'hidden'
})

const AdvantageBox = (props: { advantage: string }) => {
  return (
    <Box display="flex" alignItems="center" fontSize={3} pt={3} pb={3}>
      <Icon size="lg" color="#ff6558" iconPrefix='far' iconName='star'></Icon>
      <Text pl={3} >{props.advantage}</Text>
    </Box>
  )
}

const LifestyleLink = (props: { link: string, description: string }) => {
  return (
    <Box display="flex" color="#0081d5" alignItems="center" fontSize={2} pt={3} pb={3}>
      <a href={props.link} target='_BLANK'>
        <Icon iconPrefix='fas' iconName='link'></Icon>
        <Text pl={2} >{props.description}</Text>
      </a>
    </Box>
  )
}



export default withRouter<JobOfferProps>(JobOfferPage);
