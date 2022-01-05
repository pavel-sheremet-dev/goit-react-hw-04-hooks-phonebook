import { GlobalStyle } from "./styles/GlobalStyles";
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import themes from "./styles/themes/index";
import ThemeSwitcher from "./components/themeSwitcher/ThemeSwitcher";
import ContactsForm from "./components/contactsForm/ContactsForm";
import ContactsList from "./components/contactsList/ContactsList";
import EmptyContactsNotify from "./components/notify/EmptyContactsNotify";
import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";
import { HeaderContainer } from "./components/container/StyledContainer";
import Section from "./components/section/Section";
import Logo from "./components/logo/Logo";
import Container from "./components/container/Container";
import toast, { Toaster } from "react-hot-toast";

// { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
// { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
// { id: "id-3", name: "Eden Clements", number: "645-17-79" },
// { id: "id-4", name: "Annie Copeland", number: "227-91-26" },

export default class App extends Component {
  state = {
    themeTitle: localStorage.getItem("theme") || "dark",
    contacts: JSON.parse(localStorage.getItem("local-contacts")) || [],
    filter: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.themeTitle !== prevState.themeTitle) {
      localStorage.setItem("theme", this.state.themeTitle);
    }
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        "local-contacts",
        JSON.stringify(this.state.contacts)
      );
    }
  }

  handleThemeSwitch = () => {
    this.setState(({ themeTitle }) => ({
      themeTitle: themeTitle === "light" ? "dark" : "light",
    }));
  };

  addContact = (contact) => {
    const normalizeName = this.textNormalize(contact.name);
    if (
      this.state.contacts.some(
        (item) => item.name.toLowerCase() === normalizeName
      )
    ) {
      toast(`${contact.name} is already in your contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
      filter: "",
    }));
  };

  removeContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };

  onFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  textNormalize = (text) => {
    return text.toLowerCase();
  };

  getFilteredContacts = (contacts, filter) => {
    const normalizedFilter = this.textNormalize(filter);
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { themeTitle, contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts(contacts, filter);
    return (
      <>
        <ThemeProvider theme={themes[themeTitle]}>
          <GlobalStyle />
          <Header>
            <HeaderContainer>
              <Logo />
              <ThemeSwitcher
                onBtnClick={this.handleThemeSwitch}
                currentTheme={themeTitle}
              />
            </HeaderContainer>
          </Header>
          <main>
            <section>
              <Container>
                <Section
                  title="Simple phonebook"
                  hLevel="h1"
                  visuallyHidden={false}
                >
                  <ContactsForm addContact={this.addContact} />
                </Section>
                <Section title="Your Contacts" hLevel="h2">
                  {contacts.length ? (
                    <>
                      <Filter
                        filterText={filter}
                        onChange={this.onFilterChange}
                      />
                      <ContactsList
                        contacts={filteredContacts}
                        removeContact={this.removeContact}
                      />
                    </>
                  ) : (
                    <EmptyContactsNotify />
                  )}
                </Section>
              </Container>
            </section>
          </main>
          <div>
            <Toaster
              toastOptions={{
                style: {
                  borderRadius: "10px",
                  background: "#236d44",
                  color: "#fff",
                },
              }}
            />
          </div>
        </ThemeProvider>
      </>
    );
  }
}
