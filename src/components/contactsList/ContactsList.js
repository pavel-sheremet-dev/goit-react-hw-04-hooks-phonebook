// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
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

const ContactsList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
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
          <ButtonStyled type="button" onClick={() => dispatch(removeItem(id))}>
            Remove
          </ButtonStyled>
        </ContactsItem>
      ))}
    </Contacts>
  );
};

export default ContactsList;
