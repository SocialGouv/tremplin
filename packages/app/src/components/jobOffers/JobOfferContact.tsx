import { Box, Button, Icon } from "@components/elements";
import { Text } from "@components/elements/Text";
import { Flex, Item } from "@components/layout";
import { Container } from "@components/layout/Container";
import { Contact } from "@domain";
import { useState } from "react";

export const JobOfferContacts = (props: { contacts: Contact[] }) => {

  return (
    <Box bg="red" pt={3} pb={3} /*zIndex={1000} position="fixed" bottom="0"*/ width="100%" borderColor="grey.0" border="1px solid" >
      <Container>
        <Flex>
          <Box pr={6} pt={4}>
            <Text as="div" color="white" fontSize={5} fontWeight={4} lineHeight={4}>
              <div>Vous avez une </div>
              <div>question?</div>
              <div >contactez</div>
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

  return (
    <Box pl={5} pt={3} pb={2} textAlign="center">
      <Text fontSize={3} pb={4} fontWeight={7}>
        <div>{props.contact.name}</div>
        <div>{props.contact.position}</div>
      </Text>
      <Box pt={4}>
        {!phoneVisble && <Button  onClick={() => setPhoneVisible(true)} variant="primary"><Icon call></Icon><Text pl={2}>Voir le numéro</Text></Button>}
        {phoneVisble && <Button variant="inverse"><Icon call></Icon><Text pl={2}>{props.contact.phone}</Text></Button>}
      </Box>
    </Box>
  )
}
