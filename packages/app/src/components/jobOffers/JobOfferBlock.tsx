import { Box } from "@components/elements";
import { Text } from "@components/elements/Text";
import { Container } from "@components/layout/Container";


export const JobOfferBlock = (props: { children?: any, grey?: boolean }) => {
  return (
    <Box pt={4} pb={5} borderBottom="1px solid #CCCCCC" bg={props.grey ? "color.grey.1" : "color.white"}>
      <Container>
        {props.children}
      </Container>
    </Box>
  )
}


export const JobOfferBlockHeader = (props: {
  title: string,
  hint?: string
}) => {
  return (
    <Box pt={2} pb={3}>
      {props.title && <Text as="div" fontSize={7} fontWeight={5} color="blue.2">{props.title}</Text>}
      {props.hint && <Text as="div" fontSize={5} color="grey.3">{props.hint}</Text>}
    </Box>
  )
}
