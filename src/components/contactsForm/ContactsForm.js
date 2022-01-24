import React, { useState, memo } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import shortid from "shortid";
import { Form } from "./ContactsForm.styled";
import { ButtonStyled } from "../Button/Buttonstyled";
import { InputName, Label, InputField } from "../input/Input.styled";
import { addItem } from "../../redux/contacts/contacts-actions";
import toast from "react-hot-toast";

const ContactsForm = ({ onAddContact, contacts }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    if (inputName === "name") {
      setName(value);
    }
    if (inputName === "number") {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalizeName = textNormalize(name);

    const isInContacts = contacts.some(
      (item) => item.name.toLowerCase() === normalizeName
    );

    if (isInContacts) {
      toast(`${name} is already in your contacts`);
      return;
    }

    const newContact = generateContact(name, number);

    onAddContact(newContact);

    setName("");
    setNumber("");
  };

  const textNormalize = (text) => {
    return text.toLowerCase();
  };

  const generateContact = (name, number) => {
    return { id: shortid.generate(), name, number };
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <InputName>Name:</InputName>
        <InputField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
          placeholder="Enter contact name"
          autoComplete="off"
        />
      </Label>
      <Label>
        <InputName>Phone number:</InputName>
        <InputField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
          placeholder="Enter phone number"
          autoComplete="off"
        />
      </Label>
      <ButtonStyled type="submit">Add contact</ButtonStyled>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onAddContact: (contact) => dispatch(addItem(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(ContactsForm));

ContactsForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
