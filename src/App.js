import { GlobalStyle } from "./styles/GlobalStyles";
import { useState, useEffect, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import themes from "./styles/themes/index";
import ThemeSwitcher from "./components/themeSwitcher/ThemeSwitcher";

import Header from "./components/header/Header";
import { HeaderContainer } from "./components/container/StyledContainer";

import Logo from "./components/logo/Logo";

import { Toaster } from "react-hot-toast";
import Contacts from "./components/contacts/Contacts";

const App = () => {
  const [themeTitle, setThemeTitle] = useState(
    () => localStorage.getItem("theme") ?? "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", themeTitle);
  }, [themeTitle]);

  const handleThemeSwitch = useCallback(
    () => setThemeTitle((prev) => (prev === "light" ? "dark" : "light")),
    []
  );

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
            <Contacts />
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
