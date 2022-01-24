import TYPES from "./theme-types";

export const toggleTheme = (currentTheme) => ({
  type: TYPES.TOGGLE,
  payload: currentTheme,
});
