import { Button } from '@components/elements';
import { JobOfferBlock, JobOfferBlockHeader, JobOfferHeader, JobOfferSection, JobOfferSectionContent, JobOfferMap } from '@components/jobOffers';
import { Item, PageLayout } from '@components/layout';
import { Container } from '@components/layout/Container';
import { Flex } from '@components/layout/flex/Flex';
import { media, styled } from '@components/styles';
import { asString } from '@components/utils';
import { fakeJobOffer, JobOffer } from '@domain';
import { jobOfferRepository } from '@repository';
import { SingletonRouter, withRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Contact = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000; /* leaflet component constraint */

	border: 1px solid ${props => props.theme.colors.grey[2]};
	background-color: ${props => props.theme.colors.white};

  .contact__wrapper {
    padding-top: 20px;
    padding-bottom: 20px;

    .contact__infobar {
      display: inline-block;

      ${media.phone`display: none;`}

      .contact__question {
        color: ${props => props.theme.colors.grey[3]};
        font-size: ${props => props.theme.fontSizes[2]};
      }

      .contact__person {
          padding-left: 20px;
          color: ${props => props.theme.colors.black[0]};;
          font-size: ${props => props.theme.fontSizes[5]};
          font-weight: 500;
      }
    }

    .contact__buttonbar {
      padding-left: 30px;
      display: inline-block;
    }
  }
`

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
      <Contact>
        <Container className="contact__wrapper">
          <div className="contact__infobar">
            <span className="contact__question">Vous avez une question? Contacter</span>
            <span className="contact__person">Suzanne Langlois, secrétaire de mairie</span>
          </div>
          <div className="contact__buttonbar">
            <Button fontSize={1} color="white" bg="red">06 99 99 55 44</Button>
            <Button fontSize={1} color="white" bg="red">CONTACTER PAR MAIL</Button>
          </div>
        </Container>
      </Contact>
    </PageLayout >
  );
}

export default withRouter<JobOfferProps>(JobOfferPage);
