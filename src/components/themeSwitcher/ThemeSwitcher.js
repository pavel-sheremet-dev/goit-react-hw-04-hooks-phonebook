import { useState, useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/theme/theme-actions";

import sprite from "../../images/sprite.svg";
import { ThemeBtn, ThemeIcon } from "./ThemeSwitcher.styled";

const ThemeSwitcher = () => {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleClick = () => {
    hideElement().then(() => {
      dispatch(toggleTheme(theme));
      setOpacity(1);
      setScale(1);
    });
  };

  const hideElement = () => {
    const promise = new Promise((res) => {
      setOpacity(0);
      setScale(0.7);
      setTimeout(() => {
        res(true);
      }, 125);
    });
    return promise;
  };

  return (
    <ThemeBtn type="button" onClick={handleClick}>
      <ThemeIcon opacity={opacity} scale={scale}>
        <use
          href={`${sprite}#${theme === "light" ? "icon-sun" : "icon-moon"}`}
        ></use>
      </ThemeIcon>
    </ThemeBtn>
  );
};

export default memo(ThemeSwitcher);
