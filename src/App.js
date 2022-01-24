import { GlobalStyle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import themes from "./styles/themes/index";

import Header from "./components/header/Header";

import Main from "./components/main/Main";
import Notify from "./components/notify/Notify";

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <Header />
        <Main />
        <Notify />
      </ThemeProvider>
    </>
  );
};

export default App;
