import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import contactsReducer from "./contacts/contacts-reducer";
import themeReducer from "./theme/theme-reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  theme: themeReducer,
  zaglushka: () => [],
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
