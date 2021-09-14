import { ADD_CONTACT, DELETE_CONTACT } from "./actionType";

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: { id: Date.now(), name, number },
});

export const delContact = (contact) => ({
  type: DELETE_CONTACT,
  payload: contact,
});
