import { Box } from "@components/elements";
import { Text } from "@components/elements/Text";
import { Container } from "@components/layout/Container";

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


export const JobOfferBlockHeader1 = (props: {
  title: string,
  hint?: string
}) => {
  return (
    <Box pb={2}>
      {props.title && <Text as="div" fontSize={7} fontWeight={4} color="black1.2">{props.title}</Text>}
    </Box>
  )
}

export const JobOfferBlockHeader = (props: {
  title: string,
  children?: any
}) => {
  return (
    <Box pb={3}>
      <Text as="div" pb={2} fontSize={7} fontWeight={5} color="blue.2">{props.title}</Text>
      {props.children}
    </Box>
  )
}
