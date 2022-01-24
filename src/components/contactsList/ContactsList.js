import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeItem } from "../../redux/contacts/contacts-actions";
import { ButtonStyled } from "../Button/Buttonstyled";
import {
  ContactInfo,
  ContactName,
  ContactPhone,
  ContactsItem,
  Contacts,
  PhoneLink,
} from "./ContactsList.styled";
import { useMemo } from "react";

const ContactsList = ({ contacts, filter, onRemoveContact }) => {
  const textNormalize = (text) => {
    return text.toLowerCase();
  };

  const filteredContacts = useMemo(() => {
    const normalizedFilter = textNormalize(filter);
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  return (
    <Contacts>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactInfo>
            <ContactName>{name}</ContactName>
            <ContactPhone>
              <PhoneLink href={`tel:${name}`}>{number}</PhoneLink>
            </ContactPhone>
          </ContactInfo>
          <ButtonStyled
            type="button"
            onClick={() => {
              onRemoveContact(id);
            }}
          >
            Remove
          </ButtonStyled>
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
  onRemoveContact: PropTypes.func,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveContact: (id) => dispatch(removeItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
