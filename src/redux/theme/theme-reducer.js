const themeReducer = (state = "dark", { type, payload }) => {
  switch (type) {
    case "theme/toggle":
      return payload;
    default:
      return state;
  }
};

export default themeReducer;
