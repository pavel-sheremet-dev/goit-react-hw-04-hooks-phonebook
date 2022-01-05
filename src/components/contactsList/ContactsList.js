import PropTypes from "prop-types";
import { ButtonStyled } from "../Button/Buttonstyled";
import {
  ContactInfo,
  ContactName,
  ContactPhone,
  ContactsItem,
  Contacts,
  PhoneLink,
} from "./ContactsList.styled";

const ContactsList = ({ contacts, removeContact }) => {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactInfo>
            <ContactName>{name}</ContactName>
            <ContactPhone>
              <PhoneLink href={`tel:${name}`}>{number}</PhoneLink>
            </ContactPhone>
          </ContactInfo>
          {removeContact && (
            <ButtonStyled
              type="button"
              onClick={() => {
                removeContact(id);
              }}
            >
              Remove
            </ButtonStyled>
          )}
        </ContactsItem>
      ))}
    </Contacts>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func,
};

export default ContactsList;
