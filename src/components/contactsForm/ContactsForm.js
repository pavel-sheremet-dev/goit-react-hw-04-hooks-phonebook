import React, { useState, memo } from "react";

import PropTypes from "prop-types";
import shortid from "shortid";
import { Form } from "./ContactsForm.styled";
import { ButtonStyled } from "../Button/Buttonstyled";
import { InputName, Label, InputField } from "../input/Input.styled";

const ContactsForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  // const stateSetsObject = { setName, setNumber };
  // const stateSetsKeys = Object.keys(stateSetsObject);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    if (inputName === "name") {
      setName(value);
    }
    if (inputName === "number") {
      setNumber(value);
    }

    // const stateValue = stateSetsKeys.filter(key =>
    //   key.toLowerCase().includes(inputName),
    // )[0];
    // stateSetsObject[stateValue](value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = generateContact(name, number);
    addContact(newContact);
    setName("");
    setNumber("");
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

export default memo(ContactsForm);

ContactsForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
