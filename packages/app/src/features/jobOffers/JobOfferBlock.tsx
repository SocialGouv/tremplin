import { Box } from "@components/elements";
import { Text } from "@components/elements/Text";
import { Container } from "@components/layout/Container";


export const JobOfferBlock = (props: { children?: any, grey?: boolean }) => {
  return (
    <Box pt={4} pb={5} borderBottom="2px solid" borderColor="grey.6" bg={props.grey ? "brown.9" : "color.white"}>
      <Container>
        {props.children}
      </Container>
    </Box>
  )
}


export const JobOfferBlockHeader1 = (props: {
  title: string,
  hint?: string
}) => {
  return (
    <Box pt={2} pb={2}>
      {props.title && <Text as="div" fontSize={7} fontWeight={4} color="black1.2">{props.title}</Text>}
    </Box>
  )
}

export const JobOfferBlockHeader = (props: {
  title: string,
  hint?: string,
  children?: any
}) => {
  return (
    <Box pt={1} pb={3}>
      <Box pb={2}>
        {props.title && <Text as="div" fontSize={7} fontWeight={5} color="blue.2">{props.title}</Text>}
        {props.hint && <Text as="div" fontSize={5} color="grey.2">{props.hint}</Text>}
      </Box>
      {props.children}
    </Box>
  )
}