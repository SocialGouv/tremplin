import { Button, Icon } from '@components/elements';
import { JobOfferBlock, JobOfferBlockHeader, JobOfferHeader } from '@components/jobOffers';
import { Item, PageLayout } from '@components/layout';
import { Container } from '@components/layout/Container';
import { Flex } from '@components/layout/flex/Flex';
import { MapViewProps } from '@components/map';
import { media, styled } from '@components/styles';
import dynamic from 'next/dynamic';
import { Component } from 'react';

// https://github.com/zeit/next.js/issues/4515
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/33163
const MapView = dynamic<MapViewProps>((() => import("@components/map/MapView")) as any, { ssr: false });


// OFFER COMPONENTS
// ============================================================
// ============================================================



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


const Section = styled.div`

  .section__title {
    display: block;
    padding: 0 0 10px 0;

    color: ${props => props.theme.colors.grey[3]};
    font-size: 22px;
  }

  .section__content {
    display: block;
    padding: 0 0 20px 0;
  }

  .text {
    line-height: 26px;

    color: ${props => props.theme.colors.grey[3]};
    font-size: ${props => props.theme.fontSizes[3]};
  }

  ul {
    list-style: none;
  }
`

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

// MOCK

const FakeImage = styled.div`
  background-color: #aaa;
  width: 100%;
  height: 400px;
`

class JobOfferPage extends Component<any, any> {

  public render() {
    return (
      <PageLayout>
        <JobOfferHeader imgUrl="url('static/assets/photos/heading.jpg')"
          title="Maison médicalisée rénovée en centre-ville de Bérat (31700)"
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
          <JobOfferBlockHeader title="Lieu d'exercice" hint="Chemin de catalanie, Bérat (31700), Occitanie" />
          <Flex justifyBetween>
            <Item basis="calc(50% - 10px)">
              <img src="/static/assets/photos/lobby.jpg"></img>
            </Item>
            <Item basis="calc(50% - 10px)">
              <Section>
                <span className="section__title">Présentation</span>
                <span className="section__content text">Maison médicale neuve pluridisciplinaire (kiné-psychiatre-psychologue-orthophonistes-infirmières) - grand bureau avec terrasse. Informatisée, une patientéle jeune et dynamique. Projet de collaboration pour septembre 2019 avec bureau neuf pour collaborateur. Pellentesque tellus. Donec eget tortor vel dolor varius consectetuer. Donec mauris nibh, pretium a, tempus eget, varius in, eros. Cras lacus. Nam tellus purus, accumsan commodo, aliquam vitae, posuere nec, odio.</span>
              </Section>
              <Section>
                <span className="section__title">Equipements</span>
                <div className="section__content text">
                  <div><Icon checkCircle /> Salle d'attente</div>
                  <div><Icon checkCircle /> Secretariat</div>
                  <div><Icon checkCircle /> Logiciel de prise de rendez-vous</div>
                </div>
              </Section>
            </Item>
          </Flex>
        </JobOfferBlock>
        <JobOfferBlock>
          <JobOfferBlockHeader title="Emplacement" hint="Bérat (31700), Occitanie" />
          <Flex justifyBetween>
            <Item basis="calc(60% - 10px)">
              <MapView lat={44.7333} lng={5.0333} zoom={12}></MapView>
            </Item>
            <Item basis="calc(40% - 10px)">
              <Section>
                <span className="section__title">Transport</span>
                <div className="section__content text">
                  <div><Icon checkCircle /> Proximité de Toulouse</div>
                  <div><Icon checkCircle /> Autoroute A64 à 7km</div>
                  <div><Icon checkCircle /> Stations de ski à 1h - Mer à 1h30</div>
                </div>
              </Section>
            </Item>
          </Flex>
        </JobOfferBlock>
        <JobOfferBlock>
          <JobOfferBlockHeader title="Condition d'exercice" hint="Lorem ipsum dolor sit amet" />
          <Flex justifyBetween>
            <Item basis="calc(30% - 10px)">
              <Section>
                <div className="section__content text">
                  <div><Icon checkCircle /> Statut salarié</div>
                  <div><Icon checkCircle /> Conventionné Secteur 1</div>
                  <div><Icon checkCircle /> Temps partiel</div>
                  <div><Icon checkCircle /> Visites à domicile</div>
                </div>
              </Section>
            </Item>
            <Item basis="calc(50% - 10px)">
              <Section>
                <div className="section__content text">Patientèle estimée à 4 500 habitants (plus de 3 000 habitants sur la commune</div>
                <div className="section__content text">Professionnels déjà installés dans la maison médicale: un médecin généraliste (Dr Yveline DESIREL)</div>
              </Section>
            </Item>
          </Flex>
        </JobOfferBlock>
        <JobOfferBlock>
          <JobOfferBlockHeader title="Offre médicale à proximité" hint="Lorem ipsum dolor sit amet" />
          <Flex justifyBetween>
            <Item basis="calc(50% - 10px)">
              <Section>
                <span className="section__title">Nombre de paramédicaux</span>
                <div className="section__content text">
                  <div><Icon checkCircle /> 4 infirmières</div>
                  <div><Icon checkCircle /> Une kinésithérapeute</div>
                  <div><Icon checkCircle /> Une ostéopathe</div>
                </div>
              </Section>
            </Item>
            <Item basis="calc(50% - 10px)">
              <Section>
                <span className="section__title">Équipements</span>
                <div className="section__content text">
                  <div><Icon checkCircle /> Clinique ou CHU à 20km</div>
                  <div><Icon checkCircle /> Centre de radio-echographie à 7km</div>
                  <div><Icon checkCircle /> Laboratoire d'analyse à moins de 10km</div>
                </div>
              </Section>
            </Item>
          </Flex>
          <Section>
            <span className="section__title">Présentation</span>
            <div className="section__content text">Nam a justo quis ante consectetuer ullamcorper. Ut bibendum, elit a congue ultricies, sem ligula adipiscing tellus, sed tempus est urna in lectus. Integer non dolor. Phasellus vehicula sem ac erat. Phasellus tincidunt iaculis lacus. Donec quam pede, interdum eget, egestas a, iaculis in, tellus. Nam a justo quis ante consectetuer ullamcorper. Ut bibendum, elit a congue ultricies, sem ligula adipiscing tellus, sed tempus est urna in lectus. Integer non dolor. Phasellus vehicula sem ac erat. Phasellus tincidunt iaculis lacus. Donec quam pede, interdum eget, egestas a, iaculis in, tellus.</div>
          </Section>
        </JobOfferBlock>
        <JobOfferBlock>
          <JobOfferBlockHeader title="Cadre de vie" hint="Un cadre de vie idéal pour s'épanouir en famille" />
          <Flex justifyBetween>
            <Item basis="calc(50% - 10px)"><FakeImage></FakeImage></Item>
            <Item basis="calc(50% - 10px)">
              <Section>
                <span className="section__title">Equipements municipaux</span>
                <div className="section__content text">
                  <div><Icon checkCircle /> 1 crèche, 1 collège, 1 lycée à moins de 20km</div>
                  <div><Icon checkCircle /> Proximité des services publics</div>
                  <div><Icon checkCircle /> 1 équipement sportif</div>
                </div>
              </Section>
              <Section>
                <span className="section__title">Commerce</span>
                <div className="section__content text">
                  <div><Icon checkCircle /> proximité des commerces</div>
                  <div><Icon checkCircle /> proximité des commerces</div>
                  <div><Icon checkCircle /> grand parking public</div>
                </div>
              </Section>
              <Section>
                <span className="section__title">Présentation</span>
                <div className="section__content  text">Nam a justo quis ante consectetuer ullamcorper. Ut bibendum, elit a congue ultricies, sem ligula adipiscing tellus, sed tempus est urna in lectus. Integer non dolor. Phasellus vehicula sem ac erat. Phasellus tincidunt iaculis lacus. Donec quam pede, interdum eget, egestas a, iaculis in, tellus. Nam a justo quis ante consectetuer ullamcorper. Ut bibendum, elit a congue ultricies, sem ligula adipiscing tellus, sed tempus est urna in lectus. Integer non dolor. Phasellus vehicula sem ac erat. Phasellus tincidunt iaculis lacus. Donec quam pede, interdum eget, egestas a, iaculis in, tellus.</div>
              </Section>
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
              <Section>
                <span className="section__title">Présentation</span>
                <div className="section__content  text">Commune classée en zone de vigilance, possibilité d’obtention de différentes aides (Contrat de praticien territorial de médecine générale PTMG, contrat d’engagement de service public CESP)</div>
              </Section>
            </Item>
            <Item basis="calc(20% - 10px)">
              <Section>
                <span className="section__title">Aides éligibles</span>
                <div className="section__content text">
                  <div><Icon checkCircle /> CESP</div>
                  <div><Icon checkCircle /> PTMC</div>
                  <div><Icon checkCircle /> ZRR</div>
                </div>
              </Section>
            </Item>
            <Item basis="calc(20% - 10px)"></Item>
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

}

export default JobOfferPage;
