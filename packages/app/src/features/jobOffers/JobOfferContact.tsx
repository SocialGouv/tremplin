import { Contact } from "@api";
import { Box, Button, Icon } from "@components/elements";
import { Text } from "@components/elements/Text";
import { Container } from "@components/layout/Container";
import { styled } from "@styles";
import { logger } from "@util";
import { useState } from "react";


export const JobOfferContacts = (props: { contacts: Contact[] }) => {

  return (
    <Box bg="red" pt={3} pb={3} /*zIndex={1000} position="fixed" bottom="0"*/ borderColor="grey.0" border="1px solid" >
      <Container>
        <Box display="flex" flexDirection={["column", "row", "row"]} alignItems="center" alignContent="flex-start">
          <Box maxWidth="250px" textAlign="center">
            <Text as="div" color="white" fontSize={5} fontWeight={4} lineHeight={4} >
              Vous avez une question? contactez
            </Text>
          </Box>
          {props.contacts.map((contact, index) => <JobOfferContact key={index} contact={contact} />)}
        </Box>
      </Container>
    </Box>
  )
}

const ContactButton = styled(Button)`
  width: 230px;
`

const JobOfferContact = (props: { contact: Contact }) => {

  const [phoneVisble, setPhoneVisible] = useState<boolean>(false);

  const handleClick = () => {
    setPhoneVisible(true);
    logger.trackEvent("offre", "contact-phone", props.contact.name);
  }

  const contactByEmail = () => {
    if (window) {
      window.location.href = `mailto:${props.contact.email}`;
      logger.trackEvent("offre", "contact-email", props.contact.name);
    }
  }

  return (
    <Box textAlign="center" flex="1 1 auto">
      <Box>
        <Text as="div" pt={2} pb={1} fontSize={4} fontWeight={6}>{props.contact.name}</Text>
        <Text as="div" color="rgba(51, 51, 51, 0.8)" fontSize={3} >{props.contact.position}</Text>
      </Box>
      <Box pt={3} display="flex" flexDirection="column" alignItems="center">
        {(props.contact.phone && !phoneVisble) &&
          <ContactButton onClick={handleClick} variant="primary">
            <Icon iconPrefix='fas' iconName='phone'></Icon><Text pl={2}>Voir le numéro</Text>
          </ContactButton>
        }
        {phoneVisble &&
          <a href={`tel:${props.contact.phone}`}>
            <ContactButton variant="inverse">
              <Icon iconPrefix='fas' iconName='phone'></Icon><Text pl={2}>{props.contact.phone}</Text>
            </ContactButton>
          </a>}
        {props.contact.email &&
          <ContactButton onClick={contactByEmail} variant="primary">
            <Icon iconPrefix='fas' iconName='envelope'></Icon><Text pl={2}>Envoyer un email</Text>
          </ContactButton>}
      </Box>
    </Box>
  )

}
