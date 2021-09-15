import React, { useEffect } from "react";

import "./App.css";

import Section from "../Section/Section";
import InputContact from "../InputContact/InputContact";
import Contacts from "../Contacts/Contacts";
import { useSelector, useDispatch } from "react-redux";
import { initStore } from "../../redux/actions";

export default function App() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("contacts"))?.length > 0) {
      dispatch(initStore(JSON.parse(localStorage.getItem("contacts"))));
    }
  }, []);

  return (
    <div className="App">
      <Section title="Phonebook">
        <InputContact />
      </Section>
      {contacts.items.length > 0 && (
        <Section title="Contacts">
          <Contacts />
        </Section>
      )}
    </div>
  );
}
