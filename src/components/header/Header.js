import React from "react";
import { HeaderContainer } from "../container/StyledContainer";
import Logo from "../logo/Logo";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <ThemeSwitcher />
      </HeaderContainer>
    </header>
  );
};

export default Header;
