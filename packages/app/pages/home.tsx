import { JobOffer, jobOfferRepository } from "@api";
import { Box, Button, Icon } from "@components/elements";
import { Text } from "@components/elements/Text";
import { Container } from "@components/layout/Container";
import PageLayout from "@components/layout/PageLayout";
import { JobOfferCard } from "@features/jobOffers";
import { useEffect, useState } from "react";

const Title = (props: { children: any }) => <Text as="h1" color="white" fontSize={9} lineHeight={4} style={{ textShadow: '#B3B3B3 0 0 10px' }}>{props.children}</Text>


const H2 = (props: { children: any }) => <Text as="h2" fontSize={5} lineHeight={4}>{props.children}</Text>
const H3 = (props: { children: any }) => <Text as="h3" color="blue.0" pb={2} fontSize={4}>{props.children}</Text>
const H4 = (props: { children: any }) => <Text as="h4" lineHeight={3} color="black" pb={2} fontSize={2}>{props.children}</Text>
const ServiceContainer = (props: { children: any }) => <Box pt={[4, 3, 3]} textAlign="center" m={3} maxWidth="350px">{props.children}</Box>

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
      <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" justifyContent="center" height="300px" backgroundSize='cover' backgroundImage="url('static/assets/img/tremplin.jpg')" backgroundPosition="center" backgroundRepeat="no-repeat" >
        <Title >
          <div>Rapprocher les professionnels de santé</div>
          <div>de leur futur territoire d’exercice</div>
        </Title>
      </Box>
      <Container>
        <Box display="flex" flexDirection="column" pt={4} pb={5}>
          <Box textAlign="center" pt={4} pb={4}>
            <H2>
              <div>Vous êtes porteur de projet (collectivité, médecin, maison de santé...) ?</div>
              <div>Tremplin vous accompagne dans le recrutement</div>
              <div>d’un médecin sur votre territoire.</div>
            </H2>
          </Box>
          <Box display="flex" flexDirection={["column", "row", "row"]} alignItems="center" justifyContent="center">
            <ServiceContainer>
              <Icon iconName="file-alt" iconPrefix="fas" size="5x"></Icon>
              <Box pt={4} >
                <H3>Aide à la présentation de votre offre</H3>
                <H4>Nous travaillons avec des médecins pour définir les critères et informations qui comptent réellement pour eux.</H4>
              </Box>
            </ServiceContainer>
            <ServiceContainer>
              <Icon iconName="share-alt" iconPrefix="fas" size="5x"></Icon>
              <Box pt={4}>
                <H3>Diffusion de votre offre</H3>
                <H4>Nous nous occupons de la diffusion de votre offre sur différentes plateformes nationales et régionales, privées et publiques.</H4>
              </Box>
            </ServiceContainer>
          </Box>
        </Box>
      </Container>
      <Box pt={4} pb={4} bg="grey.9" >
        <Container>
          <Box display="flex" flexDirection={["column", "row", "row"]} justifyContent="center" alignItems="center">
            <Box display={["none", "block", "block"]}>
              <Text color="grey.0" pr={3} fontSize={3}>Pour un accompagnement gratuit et sur mesure</Text>
            </Box>
            <Button variant="primary" onClick={contactByEmail}>Contactez-nous</Button>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box pt={4} pb={4}>
          <Box textAlign="center" pb={4}>
            <H2>Nos dernières offres d'installation</H2>
          </Box>
          <Box display="flex" flexDirection={["column", "row", "row"]} alignItems="center" justifyContent="center">
            {jobOffers.map(jobOffer => <JobOfferCard key={jobOffer.reference} jobOffer={jobOffer}></JobOfferCard>)}
          </Box>
        </Box>
      </Container>

    </PageLayout>
  )
}

const contactByEmail = () => {
  if (window) {
    window.location.href = `mailto:contact@tremplin.beta.gouv.fr?subject=Demande d'accompagnement Tremplin&body=${body}`;
  }
}

const body = `Bonjour l’équipe Tremplin,
%0D%0A %0D%0A
Je souhaiterais avoir recours à vos services pour le recrutement d’un médecin sur mon territoire.
%0D%0A %0D%0A
(supprimer mention inutile)
%0D%0A %0D%0A
Option 1 : j’ai déjà publié une offre accessible ici : ...
Mais je pense qu’elle pourrait-être améliorée et mieux diffusée grâce à vous.
%0D%0A %0D%0A
Option 2 : Je n’ai pas encore publié mon offre mais souhaiterais travailler dessus avec vous.
Pouvez-vous me proposer un accompagnement ?
%0D%0A %0D%0A
Merci !`