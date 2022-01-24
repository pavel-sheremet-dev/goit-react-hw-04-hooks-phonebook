import { combineReducers } from "redux";
import TYPES from "./contacts-types";

// const action = {type: 'action/type', payload: 'data'}

const contactsInitialState =
  JSON.parse(localStorage.getItem("local-contacts")) ?? [];

const itemsReducer = (state = contactsInitialState, { type, payload }) => {
  switch (type) {
    case TYPES.ADD:
      return [payload, ...state];
    case TYPES.REMOVE:
      return state.filter((contact) => contact.id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case TYPES.FILTER_CHANGE:
      return payload;
    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
