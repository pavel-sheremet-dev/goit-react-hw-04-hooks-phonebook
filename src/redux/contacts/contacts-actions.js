import TYPES from "./contacts-types";

export const addItem = (item) => ({
  type: TYPES.ADD,
  payload: item,
});

export const removeItem = (id) => ({
  type: TYPES.REMOVE,
  payload: id,
});

export const changeFilter = (value) => ({
  type: TYPES.FILTER_CHANGE,
  payload: value,
});
