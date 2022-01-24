import { useEffect } from "react";
import { connect } from "react-redux";

// components
import ContactsForm from "../contactsForm/ContactsForm";
import ContactsList from "../contactsList/ContactsList";
import Container from "../container/Container";
import Filter from "../filter/Filter";
import EmptyContactsNotify from "../notify/EmptyContactsNotify";
import Section from "../section/Section";

const Contacts = ({ contacts }) => {
  useEffect(() => {
    localStorage.setItem("local-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Section title="Simple phonebook" hLevel="h1" visuallyHidden={false}>
        <ContactsForm />
      </Section>
      <Section title="Your Contacts" hLevel="h2">
        {contacts.length ? (
          <>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <EmptyContactsNotify />
        )}
      </Section>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
  };
};

export default connect(mapStateToProps)(Contacts);
