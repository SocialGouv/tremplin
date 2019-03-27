import { Button } from '@components/elements';
import { JobOfferBlock, JobOfferBlockHeader, JobOfferHeader, JobOfferSection, JobOfferSectionContent } from '@components/jobOffers';
import { Item, PageLayout } from '@components/layout';
import { Container } from '@components/layout/Container';
import { Flex } from '@components/layout/flex/Flex';
import { MapViewProps } from '@components/map';
import { media, styled } from '@components/styles';
import { asString } from '@components/utils';
import { fakeJobOffer, JobOffer } from '@domain';
import { jobOfferRepository } from '@repository';
import dynamic from 'next/dynamic';
import { SingletonRouter, withRouter } from 'next/router';
import { useEffect, useState } from 'react';

// https://github.com/zeit/next.js/issues/4515
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/33163
const MapView = dynamic<MapViewProps>((() => import("@components/map/MapView")) as any, { ssr: false });


// const BlockNav = styled.div`
//   position: sticky;
//   top: 0;
//   height: 70px;

//   background-color: ${props => props.theme.color.white};

//   @media (max-width: 700px) {
//     display: none;
//   }

//   .blocks-nav__item{
//     flex: 0 1 auto;
//     padding: 0 30px 0 0;
//     margin: 0 0 0 10px;
//     line-height: 70px;

//     color: ${props => props.theme.colors.grey[3]er};
//     font-size: ${props => props.theme.fontSizes.xl};
//     font-weight: 500;
//     text-transform: uppercase;
//     :hover {
//         cursor: pointer;
//         opacity: 0.6;
//       }
//     &.active {
//       border-bottom: 3px solid ${props => props.theme.color.blue};
//     }
//   }
// `


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
// const FakeImage = styled.div`
//   background-color: #aaa;
//   width: 100%;
//   height: 400px;
// `

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
      <JobOfferHeader imgUrl="url('static/assets/photos/heading.jpg')"
        title={jobOffer.title}
        hint="Médecin Généraliste | Offre publiée le 27 février 2019 à 18:00" />
      {/* <BlockNav>
            <Row>
              <Link href="#block1"><div className="blocks-nav__item active">Exercice</div></Link>
              <div className="blocks-nav__item">Offre médicale</div>
              <div className="blocks-nav__item">Cadre de vie</div>
              <div className="blocks-nav__item">Région</div>
              <Link href="#block5"><div className="blocks-nav__item">Aide à l'installation</div></Link>
            </Flex>
        </BlockNav> */}
      <JobOfferBlock>
        <JobOfferBlockHeader title="Lieu d'exercice" />
        <Flex justifyBetween>
          <Item basis="calc(50% - 10px)">
            <MapView lat={44.7333} lng={5.0333} zoom={9}></MapView>
          </Item>
          <Item basis="calc(50% - 10px)">
            <JobOfferSection title="Condition d'exercice">
              <JobOfferSectionContent>Maison médicale neuve pluridisciplinaire (kiné-psychiatre-psychologue-orthophonistes-infirmières) - grand bureau avec terrasse. Informatisée, une patientéle jeune et dynamique. Projet de collaboration pour septembre 2019 avec bureau neuf pour collaborateur. Pellentesque tellus. Donec eget tortor vel dolor varius consectetuer. Donec mauris nibh, pretium a, tempus eget, varius in, eros. Cras lacus. Nam tellus purus, accumsan commodo, aliquam vitae, posuere nec, odio.</JobOfferSectionContent>
            </JobOfferSection>
            <JobOfferSection title="Structure d'accueil">
              <JobOfferSectionContent>Maison médicale neuve pluridisciplinaire (kiné-psychiatre-psychologue-orthophonistes-infirmières) - grand bureau avec terrasse. Informatisée, une patientéle jeune et dynamique. Projet de collaboration pour septembre 2019 avec bureau neuf pour collaborateur. Pellentesque tellus. Donec eget tortor vel dolor varius consectetuer. Donec mauris nibh, pretium a, tempus eget, varius in, eros. Cras lacus. Nam tellus purus, accumsan commodo, aliquam vitae, posuere nec, odio.</JobOfferSectionContent>
            </JobOfferSection>
          </Item>
        </Flex>
      </JobOfferBlock>
      <JobOfferBlock>
        <JobOfferBlockHeader title="Cadre de vie" />
        <Flex justifyBetween>
          <Item basis="calc(50% - 10px)">
            <JobOfferSection title="Vie de famille, employabilité, loisirs">
              <JobOfferSectionContent>Maison médicale neuve pluridisciplinaire (kiné-psychiatre-psychologue-orthophonistes-infirmières) - grand bureau avec terrasse. Informatisée, une patientéle jeune et dynamique. Projet de collaboration pour septembre 2019 avec bureau neuf pour collaborateur. Pellentesque tellus. Donec eget tortor vel dolor varius consectetuer. Donec mauris nibh, pretium a, tempus eget, varius in, eros. Cras lacus. Nam tellus purus, accumsan commodo, aliquam vitae, posuere nec, odio.</JobOfferSectionContent>
            </JobOfferSection>
          </Item>
          <Item basis="calc(50% - 10px)">
            <JobOfferSection title="Territoire">
              <JobOfferSectionContent>Maison médicale neuve pluridisciplinaire (kiné-psychiatre-psychologue-orthophonistes-infirmières) - grand bureau avec terrasse. Informatisée, une patientéle jeune et dynamique. Projet de collaboration pour septembre 2019 avec bureau neuf pour collaborateur. Pellentesque tellus. Donec eget tortor vel dolor varius consectetuer. Donec mauris nibh, pretium a, tempus eget, varius in, eros. Cras lacus. Nam tellus purus, accumsan commodo, aliquam vitae, posuere nec, odio.</JobOfferSectionContent>
            </JobOfferSection>
          </Item>
        </Flex>
      </JobOfferBlock>
      {/* <JobOfferBlock>
          <JobOfferBlockHeader title="Emplacement" hint="Bérat (31700), Occitanie" />
          <Flex justifyBetween>
            <Item basis="calc(60% - 10px)">
              <MapView lat={44.7333} lng={5.0333} zoom={12}></MapView>
            </Item>
            <Item basis="calc(40% - 10px)">
              <JobOfferSection title="Transport">
                <div className="section__content text">
                  <div><Icon checkCircle /> Proximité de Toulouse</div>
                  <div><Icon checkCircle /> Autoroute A64 à 7km</div>
                  <div><Icon checkCircle /> Stations de ski à 1h - Mer à 1h30</div>
                </div>
              </JobOfferSection>
            </Item>
          </Flex>
        </JobOfferBlock>
        <JobOfferBlock>
          <JobOfferBlockHeader title="Condition d'exercice" hint="Lorem ipsum dolor sit amet" />
          <Flex justifyBetween>
            <Item basis="calc(30% - 10px)">
              <JobOfferSection>
                <div className="section__content text">
                  <div><Icon checkCircle /> Statut salarié</div>
                  <div><Icon checkCircle /> Conventionné Secteur 1</div>
                  <div><Icon checkCircle /> Temps partiel</div>
                  <div><Icon checkCircle /> Visites à domicile</div>
                </div>
              </JobOfferSection>
            </Item>
            <Item basis="calc(50% - 10px)">
              <JobOfferSection>
                <div className="section__content text">Patientèle estimée à 4 500 habitants (plus de 3 000 habitants sur la commune</div>
                <div className="section__content text">Professionnels déjà installés dans la maison médicale: un médecin généraliste (Dr Yveline DESIREL)</div>
              </JobOfferSection>
            </Item>
          </Flex>
        </JobOfferBlock>
        <JobOfferBlock>
          <JobOfferBlockHeader title="Offre médicale à proximité" hint="Lorem ipsum dolor sit amet" />
          <Flex justifyBetween>
            <Item basis="calc(50% - 10px)">
              <JobOfferSection title="Nombre de paramédicaux">
                <div className="section__content text">
                  <div><Icon checkCircle /> 4 infirmières</div>
                  <div><Icon checkCircle /> Une kinésithérapeute</div>
                  <div><Icon checkCircle /> Une ostéopathe</div>
                </div>
              </JobOfferSection>
            </Item>
            <Item basis="calc(50% - 10px)">
              <JobOfferSection title="Équipements">
                <div className="section__content text">
                  <div><Icon checkCircle /> Clinique ou CHU à 20km</div>
                  <div><Icon checkCircle /> Centre de radio-echographie à 7km</div>
                  <div><Icon checkCircle /> Laboratoire d'analyse à moins de 10km</div>
                </div>
              </JobOfferSection>
            </Item>
          </Flex>
          <JobOfferSection title="Présentation">
            <div className="section__content text">Nam a justo quis ante consectetuer ullamcorper. Ut bibendum, elit a congue ultricies, sem ligula adipiscing tellus, sed tempus est urna in lectus. Integer non dolor. Phasellus vehicula sem ac erat. Phasellus tincidunt iaculis lacus. Donec quam pede, interdum eget, egestas a, iaculis in, tellus. Nam a justo quis ante consectetuer ullamcorper. Ut bibendum, elit a congue ultricies, sem ligula adipiscing tellus, sed tempus est urna in lectus. Integer non dolor. Phasellus vehicula sem ac erat. Phasellus tincidunt iaculis lacus. Donec quam pede, interdum eget, egestas a, iaculis in, tellus.</div>
          </JobOfferSection>
        </JobOfferBlock>
        <JobOfferBlock>
          <JobOfferBlockHeader title="Cadre de vie" hint="Un cadre de vie idéal pour s'épanouir en famille" />
          <Flex justifyBetween>
            <Item basis="calc(50% - 10px)"><FakeImage></FakeImage></Item>
            <Item basis="calc(50% - 10px)">
              <JobOfferSection title="Equipements municipaux">
                <div className="section__content text">
                  <div><Icon checkCircle /> 1 crèche, 1 collège, 1 lycée à moins de 20km</div>
                  <div><Icon checkCircle /> Proximité des services publics</div>
                  <div><Icon checkCircle /> 1 équipement sportif</div>
                </div>
              </JobOfferSection>
              <JobOfferSection title="Commerce">
                <span className="section__title">Commerce</span>
                <div className="section__content text">
                  <div><Icon checkCircle /> proximité des commerces</div>
                  <div><Icon checkCircle /> proximité des commerces</div>
                  <div><Icon checkCircle /> grand parking public</div>
                </div>
              </JobOfferSection>
              <JobOfferSection title="Présentation">
                <div className="section__content  text">Nam a justo quis ante consectetuer ullamcorper. Ut bibendum, elit a congue ultricies, sem ligula adipiscing tellus, sed tempus est urna in lectus. Integer non dolor. Phasellus vehicula sem ac erat. Phasellus tincidunt iaculis lacus. Donec quam pede, interdum eget, egestas a, iaculis in, tellus. Nam a justo quis ante consectetuer ullamcorper. Ut bibendum, elit a congue ultricies, sem ligula adipiscing tellus, sed tempus est urna in lectus. Integer non dolor. Phasellus vehicula sem ac erat. Phasellus tincidunt iaculis lacus. Donec quam pede, interdum eget, egestas a, iaculis in, tellus.</div>
              </JobOfferSection>
            </Item>
          </Flex>
        </JobOfferBlock>
        <JobOfferBlock>
          <JobOfferBlockHeader title="Région" hint="Bérat (31700), Occitanie" />
          <Flex justifyBetween>
            <Item basis="calc(70% - 10px)"><FakeImage></FakeImage></Item>
            <Item basis="calc(30% - 10px)">
            </Item>
          </Flex>
        </JobOfferBlock>
        <JobOfferBlock>
          <JobOfferBlockHeader title="Aides à l'installation" hint="Lorem ipsum dolor sit amet" />
          <Flex justifyBetween>
            <Item basis="calc(60% - 10px)">
              <JobOfferSection title="Présentation">
                <div className="section__content  text">Commune classée en zone de vigilance, possibilité d’obtention de différentes aides (Contrat de praticien territorial de médecine générale PTMG, contrat d’engagement de service public CESP)</div>
              </JobOfferSection>
            </Item>
            <Item basis="calc(20% - 10px)">
              <JobOfferSection title="Aides éligibles">
                <div className="section__content text">
                  <div><Icon checkCircle /> CESP</div>
                  <div><Icon checkCircle /> PTMC</div>
                  <div><Icon checkCircle /> ZRR</div>
                </div>
              </JobOfferSection>
            </Item>
            <Item basis="calc(20% - 10px)"></Item>
          </Flex>
        </JobOfferBlock> */}
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
