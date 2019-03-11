import { PageLayout, Row } from '@components/layout';
import { Container } from '@components/layout/Container';
import { GridItem } from '@components/layout/grid/Row';
import { styled, media } from '@components/styles';
import Link from 'next/link';
import { Component } from 'react';

// ============================================================
// ============================================================
// GLOBAL COMPONENTS
// ============================================================
// ============================================================

const TopBar = styled.div`
  height: 100px;
  display: flex;

	border: 1px solid #CCCCCC;
	background-color: ${props => props.theme.color.white};
  box-shadow: 0 6px 14px 0 rgba(51,51,51,0.2);


  .topbar__brand {
      flex: 0 1 auto;
      line-height: 100px;

      color: ${props => props.theme.color.blueLight};
      font-family: "Roboto Condensed";
      font-size: 34px;

      :hover {
        cursor: pointer;
      }

  }

  .topbar__slogan {
      flex: 0 1 auto;
      min-width: 200px;
      max-width: 300px;
      padding: 35px 10px;

      color: rgba(96,103,114,0.87);
      font-family: "Roboto Condensed";
      font-size: ${props => props.theme.fontSize.base};
  }
`

const Button = styled.button`
    border-radius: 5px;
    background-color: ${props => props.theme.color.red};
    color: ${props => props.theme.color.white};
    font-size: ${props => props.theme.fontSize.xs};
    padding: 20px 20px;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 5px;
`
// ============================================================
// ============================================================
// OFFER COMPONENTS
// ============================================================
// ============================================================


const Heading = styled.div`
  padding: 250px 0 30px 0;

  background-image: url("/static/assets/photos/heading.jpg");
  background-position: center;
  background-repeat: no-repeat;

  .heading__title {
    display: block;
    padding: 0 0 5px 0;

    color: ${props => props.theme.color.white};
    font-size: 32px;
}

.heading__hint {
  display: block;

  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.xxl};
}
`

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

//     color: ${props => props.theme.color.greyDarker};
//     font-size: ${props => props.theme.fontSize.xl};
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
const Block = styled.div<{ grey?: boolean }>`
  border-bottom: 1px solid #CCCCCC;
  padding: 30px 0 50px 0;

  background-color: ${props => props.grey ? props.theme.color.greyLight : props.theme.color.white};

  img {
    width: 100%;
    height: 100%;
  }

  .block__header {
    padding: 20px 0
  }

  .block__header-title {
    display: block;

	  color: ${props => props.theme.color.blue};
	  font-size: 32px;
    font-weight: 500;
  }

  .block__header-hint {
    display: block;

    color: ${props => props.theme.color.greyDark};
    font-size: 22px;
  }
`

const Section = styled.div`

  .section__title {
    display: block;
    padding: 0 0 10px 0;

    color: ${props => props.theme.color.greyDark};
    font-size: 22px;
  }

  .section__content {
    display: block;
    padding: 0 0 20px 0;
  }

  .text {
    line-height: 26px;

    color: ${props => props.theme.color.greyDarker};
    font-size: ${props => props.theme.fontSize.base};
  }

  ul {
    list-style: none;
  }
`

const Contact = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

	border: 1px solid ${props => props.theme.color.border};
	background-color: ${props => props.theme.color.white};

  .contact__wrapper {
    padding-top: 20px;
    padding-bottom: 20px;

    .contact__infobar {
      display: inline-block;

      ${media.phone`display: none;`}

      .contact__question {
        color: ${props => props.theme.color.greyDark};
        font-size: ${props => props.theme.fontSize.base};
      }

      .contact__person {
          padding-left: 20px;
          color: ${props => props.theme.color.almostBlack};;
          font-size: ${props => props.theme.fontSize.xl};
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
        <TopBar>
          <Container>
            <Link href="/">
              <span className="topbar__brand">Tremplin</span>
            </Link>
            <span className="topbar__slogan">Rapprocher les professionnels de santé de leur futur territoire d’exercise</span>
          </Container>
        </TopBar>
        <Heading>
          <Container>
            <span className="heading__title">Maison médicalisée rénovée en centre-ville de Bérat (31700)</span>
            <span className="heading__hint">Médecin Généraliste | Offre publiée le 27 février 2019 à 18:00</span>
          </Container>
        </Heading>
        {/* <BlockNav>
          <Container>
            <Row>
              <Link href="#block1"><div className="blocks-nav__item active">Exercice</div></Link>
              <div className="blocks-nav__item">Offre médicale</div>
              <div className="blocks-nav__item">Cadre de vie</div>
              <div className="blocks-nav__item">Région</div>
              <Link href="#block5"><div className="blocks-nav__item">Aide à l'installation</div></Link>
            </Row>
          </Container>
        </BlockNav> */}
        <Block grey id="block1">
          <Container>
            <div className="block__header">
              <span className="block__header-title">Lieu d'exercice</span>
              <span className="block__header-hint">Chemin de catalanie, Bérat (31700), Occitanie</span>
            </div>
            <Row spaceBetween>
              <GridItem flex="0 1 calc(50% - 10px)">
                <img src="/static/assets/photos/lobby.jpg"></img>
              </GridItem>
              <GridItem flex="0 1 calc(50% - 10px)">
                <Section>
                  <span className="section__title">Présentation</span>
                  <span className="section__content text">Maison médicale neuve pluridisciplinaire (kiné-psychiatre-psychologue-orthophonistes-infirmières) - grand bureau avec terrasse. Informatisée, une patientéle jeune et dynamique. Projet de collaboration pour septembre 2019 avec bureau neuf pour collaborateur. Pellentesque tellus. Donec eget tortor vel dolor varius consectetuer. Donec mauris nibh, pretium a, tempus eget, varius in, eros. Cras lacus. Nam tellus purus, accumsan commodo, aliquam vitae, posuere nec, odio.</span>
                </Section>
                <Section>
                  <span className="section__title">Equipements</span>
                  <div className="section__content text">
                    <div>> Salle d'attente</div>
                    <div>> Secretariat</div>
                    <div>> Logiciel de prise de rendez-vous</div>
                  </div>
                </Section>
              </GridItem>
            </Row>
          </Container>
        </Block>
        <Block>
          <Container>
            <div className="block__header">
              <span className="block__header-title">Emplacement</span>
              <span className="block__header-hint">Bérat (31700), Occitanie</span>
            </div>
            <Row spaceBetween>
              <GridItem flex="0 1 calc(60% - 10px)"><FakeImage></FakeImage></GridItem>
              <GridItem flex="0 1 calc(40% - 10px)">
                <Section>
                  <span className="section__title">Transport</span>
                  <div className="section__content text">
                    <div>> Proximité de Toulouse</div>
                    <div>> Autoroute A64 à 7km</div>
                    <div>> Stations de ski à 1h - Mer à 1h30</div>
                  </div>
                </Section>
              </GridItem>
            </Row>
          </Container>
        </Block>
        <Block>
          <Container>
            <div className="block__header">
              <span className="block__header-title">Condition d'exercice</span>
              <span className="block__header-hint">Lorem ipsum dolor sit amet</span>
            </div>
            <Row spaceBetween>
              <GridItem flex="0 1 calc(30% - 10px)">
                <Section>
                  <div className="section__content text">
                    <div>> Statut salarié</div>
                    <div>> Conventionné Secteur 1</div>
                    <div>> Temps partiel</div>
                    <div>> Visites à domicile</div>
                  </div>
                </Section>
              </GridItem>
              <GridItem flex="0 1 calc(50% - 10px)">
                <Section>
                  <div className="section__content text">Patientèle estimée à 4 500 habitants (plus de 3 000 habitants sur la commune</div>
                  <div className="section__content text">Professionnels déjà installés dans la maison médicale: un médecin généraliste (Dr Yveline DESIREL)</div>
                </Section>
              </GridItem>
            </Row>
          </Container>
        </Block>
        <Block>
          <Container>
            <div className="block__header">
              <span className="block__header-title">Offre médicale à proximité</span>
              <span className="block__header-hint">Lorem ipsum dolor sit amet</span>
            </div>
            <Row spaceBetween>
              <GridItem flex="0 1 calc(50% - 10px)">
                <Section>
                  <span className="section__title">Nombre de paramédicaux</span>
                  <div className="section__content text">
                    <div>> 4 infirmières</div>
                    <div>> Une kinésithérapeute</div>
                    <div>> Une ostéopathe</div>
                  </div>
                </Section>
              </GridItem>
              <GridItem flex="0 1 calc(50% - 10px)">
                <Section>
                  <span className="section__title">Équipements</span>
                  <div className="section__content text">
                    <div>> Clinique ou CHU à 20km</div>
                    <div>> Centre de radio-echographie à 7km</div>
                    <div>> Laboratoire d'analyse à moins de 10km</div>
                  </div>
                </Section>
              </GridItem>
            </Row>
            <Section>
              <span className="section__title">Présentation</span>
              <div className="section__content text">Nam a justo quis ante consectetuer ullamcorper. Ut bibendum, elit a congue ultricies, sem ligula adipiscing tellus, sed tempus est urna in lectus. Integer non dolor. Phasellus vehicula sem ac erat. Phasellus tincidunt iaculis lacus. Donec quam pede, interdum eget, egestas a, iaculis in, tellus. Nam a justo quis ante consectetuer ullamcorper. Ut bibendum, elit a congue ultricies, sem ligula adipiscing tellus, sed tempus est urna in lectus. Integer non dolor. Phasellus vehicula sem ac erat. Phasellus tincidunt iaculis lacus. Donec quam pede, interdum eget, egestas a, iaculis in, tellus.</div>
            </Section>
          </Container>
        </Block>
        <Block>
          <Container>
            <div className="block__header">
              <span className="block__header-title">Cadre de vie</span>
              <span className="block__header-hint">Un cadre de vie idéal pour s'épanouir en famille</span>
            </div>
            <Row spaceBetween>
              <GridItem flex="0 1 calc(50% - 10px)"><FakeImage></FakeImage></GridItem>
              <GridItem flex="0 1 calc(50% - 10px)">
                <Section>
                  <span className="section__title">Equipements municipaux</span>
                  <div className="section__content text">
                    <div>> 1 crèche, 1 collège, 1 lycée à moins de 20km</div>
                    <div>> Proximité des services publics</div>
                    <div>> 1 équipement sportif</div>
                  </div>
                </Section>
                <Section>
                  <span className="section__title">Commerce</span>
                  <div className="section__content text">
                    <div>> proximité des commerces</div>
                    <div>> proximité des commerces</div>
                    <div>> grand parking public</div>
                  </div>
                </Section>
                <Section>
                  <span className="section__title">Présentation</span>
                  <div className="section__content  text">Nam a justo quis ante consectetuer ullamcorper. Ut bibendum, elit a congue ultricies, sem ligula adipiscing tellus, sed tempus est urna in lectus. Integer non dolor. Phasellus vehicula sem ac erat. Phasellus tincidunt iaculis lacus. Donec quam pede, interdum eget, egestas a, iaculis in, tellus. Nam a justo quis ante consectetuer ullamcorper. Ut bibendum, elit a congue ultricies, sem ligula adipiscing tellus, sed tempus est urna in lectus. Integer non dolor. Phasellus vehicula sem ac erat. Phasellus tincidunt iaculis lacus. Donec quam pede, interdum eget, egestas a, iaculis in, tellus.</div>
                </Section>
              </GridItem>
            </Row>
          </Container>
        </Block>
        <Block>
          <Container>
            <div className="block__header">
              <span className="block__header-title">Région</span>
              <span className="block__header-hint">Bérat (31700), Occitanie</span>
            </div>
            <Row spaceBetween>
              <GridItem flex="0 1 calc(70% - 10px)"><FakeImage></FakeImage></GridItem>
              <GridItem flex="0 1 calc(30% - 10px)">
              </GridItem>
            </Row>
          </Container>
        </Block>
        <Block id="block5">
          <Container>
            <div className="block__header">
              <span className="block__header-title">Aides à l'installation</span>
              <span className="block__header-hint">Lorem ipsum dolor sit amet</span>
            </div>
            <Row spaceBetween>
              <GridItem flex="0 1 calc(60% - 10px)">
                <Section>
                  <span className="section__title">Présentation</span>
                  <div className="section__content  text">Commune classée en zone de vigilance, possibilité d’obtention de différentes aides (Contrat de praticien territorial de médecine générale PTMG, contrat d’engagement de service public CESP)</div>
                </Section>
              </GridItem>
              <GridItem flex="0 1 calc(20% - 10px)">
                <Section>
                  <span className="section__title">Aides éligibles</span>
                  <div className="section__content text">
                    <div>> CESP</div>
                    <div>> PTMC</div>
                    <div>> ZRR</div>
                  </div>
                </Section>
              </GridItem>
              <GridItem flex="0 1 calc(20% - 10px)"></GridItem>
            </Row>
          </Container>
        </Block>
        <Contact>
          <Container className="contact__wrapper" fill>
            <div className="contact__infobar">
              <span className="contact__question">Vous avez une question? Contacter</span>
              <span className="contact__person">Suzanne Langlois, secrétaire de mairie</span>
            </div>
            <div className="contact__buttonbar">
              <Button>06 99 99 55 44</Button>
              <Button>CONTACTER PAR MAIL</Button>
            </div>
          </Container>
        </Contact>
      </PageLayout >
    );
  }

}

export default JobOfferPage;
