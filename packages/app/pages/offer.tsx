import { fakeJobOffer, JobOffer, jobOfferRepository } from '@api';
import { Box, Icon } from '@components/elements';
import { AppIconName, AppIconPrefix, AppIconSize } from '@components/elements/Icon';
import { Text } from '@components/elements/Text';
import { PageLayout } from '@components/layout';
import { JobOfferBlock, JobOfferBlockHeader1, JobOfferBlockHeader2, JobOfferContacts, JobOfferHeader, JobOfferMap, JobOfferSection, JobOfferSectionContent } from '@features/jobOffers';
import { GalleryPhoto } from '@features/jobOffers/JobOfferPhotos';
import { getFiancialAidLink, getFinancialAidLabel } from '@features/jobOffers/util/jobOfferUtil';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { extract, parse } from 'query-string';
import { Fragment, useEffect, useState } from 'react';

interface JobOfferProps {
  query: any;
}

const JobOfferPage = (props: JobOfferProps) => {

  const [jobOffer, setJobOffer] = useState<JobOffer>(fakeJobOffer);

  useEffect(() => {
    const reference = props.query.reference;
    if (reference == null) {
      return;
    }
    const subscription = jobOfferRepository().findOne(reference).subscribe(res => { setJobOffer(res); });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{jobOffer.title}</title>
        <meta name="og:title" property="og:title" content={jobOffer.title} />
      </Head>
      <PageLayout>
        <JobOfferHeader jobOffer={jobOffer} />
        <JobOfferBlock>
          <JobOfferBlockHeader1 jobOffer={jobOffer} />
          <Box pt={3} display="flex" justifyContent="space-between" flexDirection={["column", "row", "row"]}>
            <Box display="flex" flexDirection="column" justifyContent="space-around" pb={2} flex="0 1 calc(50% - 10px)">
              <IconLabel iconPrefix="far" iconSize="lg" iconColor="#ff6558" iconName="star" label={jobOffer.advantage1} />
              <IconLabel iconPrefix="far" iconSize="lg" iconColor="#ff6558" iconName="star" label={jobOffer.advantage2} />
              <IconLabel iconPrefix="far" iconSize="lg" iconColor="#ff6558" iconName="star" label={jobOffer.advantage3} />
            </Box>
            <Box flex="0 1 calc(50% - 10px)" pt={[2, 0, 0]}>
              <JobOfferMap address={jobOffer.address}></JobOfferMap>
            </Box>
          </Box>
        </JobOfferBlock>
        <JobOfferBlock>
          <JobOfferBlockHeader2 title="Lieux d'exercice" />
          <Box display="flex" flexDirection={["column", "row", "row"]}>
            {jobOffer.secretariatType.map((sec, index) => <SectionHint key={index} hint={sec} />)}
          </Box>
          <JobOfferSection>
            <JobOfferSectionContent content={jobOffer.workCondition} />
          </JobOfferSection>
        </JobOfferBlock>

        {jobOffer.photos.length > 0 && <JobOfferBlock color='grey'>
          <JobOfferBlockHeader2 title="Quelques photos" />
          <JobOfferSection>
            <GalleryPhoto jobOffer={jobOffer} />
          </JobOfferSection>
        </JobOfferBlock>
        }

        <JobOfferBlock>
          <JobOfferBlockHeader2 title="Environnement professionel" />
          <Box display="flex">
            <SectionHint hint={`Urgences les plus proches à ${jobOffer.emergencyDistance} km`} />
          </Box>
          <JobOfferSection>
            <JobOfferSectionContent content={jobOffer.medicalStructure} />
          </JobOfferSection>
          <JobOfferSection>
            <JobOfferSectionContent content={`Vous pouvez trouver les rapports et portraits de territoires sur <a target="_BLANK" href=${jobOffer.cartosante}>CartoSanté</a>`} />
          </JobOfferSection>
        </JobOfferBlock>

        <JobOfferBlock color='brown'>
          <JobOfferBlockHeader2 title="Cadre de vie" />
          <Box display="flex" flexDirection={"column"} justifyContent="space-between">
            <Box flex="0 1 calc(70% - 10px)">
              <JobOfferSection >
                <JobOfferSectionContent content={jobOffer.lifestyle} />
              </JobOfferSection>
            </Box>
            {jobOffer.lifestyleLinks && <Box flex="0 1 calc(30% - 10px)" pt={3}>
              <JobOfferSection title="Quelques liens">
                {jobOffer.lifestyleLinks.map((link, index) => <LifestyleLink key={index} link={link.link} description={link.description}></LifestyleLink>)}
              </JobOfferSection>
            </Box>
            }
          </Box>
        </JobOfferBlock>

        <JobOfferBlock >
          <JobOfferBlockHeader2 title="Aides à l'installation" />
          <JobOfferSection>
            <JobOfferSectionContent content="En venant exercer sur ce territoire, vous pouvez bénéficier de certaines aides à l'installation"></JobOfferSectionContent>
          </JobOfferSection>
          <Box display="flex" flexDirection={["column", "row", "row"]} justifyContent="space-between">
            <Box flex="0 1 calc(30% - 10px)">
              {jobOffer.financialAids.types.map((type, index) => <IconLabel helpLink={getFiancialAidLink(type)} iconPrefix='fas' key={index} iconSize="2x" iconColor="#22891f" iconName="map-marker-alt" label={getFinancialAidLabel(type)} />)}
            </Box>
            <Box flex="0 1 calc(30% - 10px)">
              <IconLabel iconPrefix='far' iconSize="2x" iconColor="#22891f" iconName="check-circle" label="Installation possible pour les signataires d'un CESP" />
            </Box>
            <Box flex="0 1 calc(30% - 10px)">
              {jobOffer.financialAids.aids.map((aid, index) => <IconLabel helpLink={getFiancialAidLink(aid)} key={index} iconPrefix='far' iconSize="2x" iconColor="#22891f" iconName="check-circle" label={getFinancialAidLabel(aid)} />)}
            </Box>
          </Box>
          <JobOfferSection>
            <JobOfferSectionContent content={jobOffer.financialAids.description} />
          </JobOfferSection>
        </JobOfferBlock>

        <JobOfferContacts contacts={jobOffer.contacts} />
      </PageLayout >
    </Fragment>
  );
};


const SectionHint = (props: { hint: string }) => <Text color="grey.2" fontSize={[3, 4, 4]} pb={2} pr={3} >• {props.hint}</Text>;



const IconLabel = (props: { label: string, helpLink?: string, iconPrefix: AppIconPrefix, iconSize: AppIconSize, iconName: AppIconName, iconColor: string }) => {
  return (
    <Box display="flex" alignItems="center" fontSize={3} pt={3} pb={3}>
      <Icon size={props.iconSize} color={props.iconColor} iconPrefix={props.iconPrefix} iconName={props.iconName}></Icon>
      <Text pl={3} >
        {!props.helpLink && <>{props.label}</>}
        {props.helpLink && <a href={props.helpLink} target="_BLANK">{props.label}</a>}
      </Text>
    </Box>
  )
}

const LifestyleLink = (props: { link: string, description: string }) => {
  return (
    <Box display="flex" color="#0081d5" alignItems="center" fontSize={2} pt={1} pb={1}>
      <a href={props.link} target='_BLANK'>
        <Box display="flex" alignItems="center" pt={1} pb={1}>
          <Icon iconPrefix='fas' iconName='link'></Icon>
          <Text pl={2} >{props.description}</Text>
        </Box>
      </a>
    </Box>
  )
}


export default withRouter(({ router, ...props }) => {

  let query: any = {};
  if (router && router.asPath) {
    query = parse(extract(router.asPath));
  }

  return (<JobOfferPage {...props} query={query} />);
});
