import { Box, Button } from "@components/elements";
import { Text } from "@components/elements/Text";
import { Container } from "@components/layout/Container";
import { Contact } from "@domain";

export const JobOfferContacts = (props: { contacts: Contact[] }) => {

  return (
    <Box pt={3} pb={3} /*zIndex={1000} position="fixed" bottom="0"*/ width="100%" borderColor="grey.0" border="1px solid" bg="white" >
      <Container>
        {props.contacts.map((contact, index) => <JobOfferContact key={index} contact={contact} />)}
      </Container>
    </Box>
  )
}

const JobOfferContact = (props: { contact: Contact }) => {
  return (
    <Box pt={2} pb={2}>
      <Text color="grey.2" fontWeight={7}>{props.contact.name}, {props.contact.position}</Text>
      <Text pl={3} color="red" fontSize={1} >{props.contact.phone}</Text>
      <Text pl={3} color="red" fontSize={1} >{props.contact.email}</Text>
    </Box>
  )
}
