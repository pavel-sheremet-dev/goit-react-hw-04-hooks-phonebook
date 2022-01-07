import { GlobalStyle } from "./styles/GlobalStyles";
import { useState, useEffect, useMemo, useCallback } from "react";
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

const App = () => {
  const [themeTitle, setThemeTitle] = useState(
    () => localStorage.getItem("theme") ?? "dark"
  );
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("local-contacts")) ?? []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("theme", themeTitle);
  }, [themeTitle]);

  useEffect(() => {
    localStorage.setItem("local-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleThemeSwitch = useCallback(
    () => setThemeTitle((prev) => (prev === "light" ? "dark" : "light")),
    []
  );

  const textNormalize = (text) => {
    return text.toLowerCase();
  };

  const addContact = useCallback(
    (contact) => {
      const normalizeName = textNormalize(contact.name);
      const isInContacts = contacts.some(
        (item) => item.name.toLowerCase() === normalizeName
      );

      if (isInContacts) {
        toast(`${contact.name} is already in your contacts`);
        return;
      }
      setContacts((prev) => [contact, ...prev]);
    },
    [contacts]
  );

  const removeContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const filterChange = useCallback((e) => {
    setFilter(e.target.value);
  }, []);

  const filteredContacts = useMemo(() => {
    const normalizedFilter = textNormalize(filter);
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  return (
    <>
      <ThemeProvider theme={themes[themeTitle]}>
        <GlobalStyle />
        <Header>
          <HeaderContainer>
            <Logo />
            <ThemeSwitcher
              onBtnClick={handleThemeSwitch}
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
                <ContactsForm addContact={addContact} />
              </Section>
              <Section title="Your Contacts" hLevel="h2">
                {contacts.length ? (
                  <>
                    <Filter filterText={filter} onChange={filterChange} />
                    <ContactsList
                      contacts={filteredContacts}
                      removeContact={removeContact}
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
};

export default App;
