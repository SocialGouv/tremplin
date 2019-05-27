import { JobOffer } from "@api";
import { Box, Icon } from "@components/elements";
import { Text } from "@components/elements/Text";
import { Container } from "@components/layout/Container";
import { format } from 'date-fns';
import fr from 'date-fns/locale/fr';

type ColorType = 'grey' | 'brown';

export const JobOfferBlock = (props: { children?: any, color?: ColorType }) => {
  return (
    <Box pt={4} pb={4} borderBottom="2px solid" borderColor="grey.6" bg={getColor(props.color)}>
      <Container>
        {props.children}
      </Container>
    </Box>
  )
}

const getColor = (val?: ColorType) => {
  if (!val) {
    return 'white';
  }
  switch (val) {
    case 'brown':
      return 'brown.9';
    case 'grey':
      return 'grey.9';
  }
}

const H1 = (props: { children?: any }) => <Text as="h1" pt={2} pb={[4, 3, 2]} fontSize={[7, 9, 9]} fontWeight={4} color="black.0">{props.children}</Text>;
const H2 = (props: { children?: any }) => <Text as="h2" fontSize={6} pt={2} pb={2} fontWeight="bold" color="rgba(0, 105, 204, 0.87)">{props.children}</Text>;


export const JobOfferBlockHeader1 = (props: { jobOffer: JobOffer }) => {
  return (
    <Box pb={3} borderBottom={["1px solid #cccccc", "0px", "0px"]}>
      <H1>{props.jobOffer.title}</H1>
      <Box fontSize={2} display="flex" alignItems="center">
        <Icon size="2x" color="rgba(0, 105, 204, 0.87)" iconPrefix='fas' iconName='user'></Icon>
        <Text pl={3} color="grey.0" >{props.jobOffer.contractType} en {props.jobOffer.structureType} | Offre publiée le {format(props.jobOffer.publishedAt, "DD MMMM YYYY à HH:mm", { locale: fr })}</Text>
      </Box>
    </Box>
  )
}
export const JobOfferBlockHeader2 = (props: { title: string, children?: any }) => <Box pb={3}><H2>{props.title}</H2></Box>
