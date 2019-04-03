import { Box, Button, Icon } from "@components/elements";
import { Text } from "@components/elements/Text";
import { Flex } from "@components/layout";
import { Container } from "@components/layout/Container";
import { trackContactEmail, trackContactPhone } from "@components/piwik";
import { Contact } from "@domain";
import { useState } from "react";

export const JobOfferContacts = (props: { contacts: Contact[] }) => {

  return (
    <Box bg="red" pt={3} pb={3} /*zIndex={1000} position="fixed" bottom="0"*/ width="100%" borderColor="grey.0" border="1px solid" >
      <Container>
        <Flex>
          <Box pr={5} pt={4} maxWidth="150px" >
            <Text as="div" color="white" fontSize={5} fontWeight={4} lineHeight={4}>
              Vous avez une question? contactez
            </Text>
          </Box>
          {props.contacts.map((contact, index) => <JobOfferContact key={index} contact={contact} />)}
        </Flex>
      </Container>
    </Box>
  )
}

const JobOfferContact = (props: { contact: Contact }) => {

  const [phoneVisble, setPhoneVisible] = useState<boolean>(false);

  const handleClick = () => {
    setPhoneVisible(true);
    trackContactPhone(props.contact.name);
  }

  const contactByEmail = () => {
    if (window) {
      window.location.href = `mailto:${props.contact.email}`;
      trackContactEmail(props.contact.name);
    }
  }

  return (
    <Box pl={5} pt={3} pb={2} textAlign="center">
      <Box pb={3} >
        <Text fontSize={3} fontWeight={7}>
          <div>{props.contact.name}</div>
          <div>{props.contact.position}</div>
        </Text>
      </Box>
      <Box pt={3} display="flex" flexDirection="column" alignItems="center">
        {(props.contact.phone && !phoneVisble) && <Button width="230px" onClick={handleClick} variant="primary"><Icon call></Icon><Text pl={2}>Voir le numéro</Text></Button>}
        {phoneVisble && <Button width="230px" variant="inverse"><Icon call></Icon><Text pl={2}>{props.contact.phone}</Text></Button>}
        {props.contact.email && <Button width="230px" onClick={contactByEmail} variant="primary"><Icon email></Icon><Text pl={2}>Envoyer une message</Text></Button>}
      </Box>
    </Box>
  )

}
