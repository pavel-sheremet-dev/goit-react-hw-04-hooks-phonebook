import TYPES from "./theme-types";

const themes = {
  dark: "dark",
  light: "light",
};

const { dark, light } = themes;

const initialState = localStorage.getItem("theme") ?? dark;

const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.TOGGLE:
      return payload === light ? dark : light;
    default:
      return state;
  }
};

export default themeReducer;
