import { ADD_CONTACT, DELETE_CONTACT } from "./actionType";
import { combineReducers } from "redux";

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];

    default:
      return state;
  }
};

const filterReducer = (state = "", action) => state;

const reducerContacts = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

// const contacts = {};
const rootReducer = combineReducers({
  contacts: reducerContacts,
});

export default rootReducer;
