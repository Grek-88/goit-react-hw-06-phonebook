import React, { useState } from "react";
import s from "../InputContact/InputContact.module.css";
import { useDispatch } from "react-redux";
// import { ADD_CONTACT } from "../../redux/actionType";
import { addContact } from "../../redux/actions";

// import { v4 as uuidv4 } from "uuid";

export default function InputContact(props) {
  const dispatch = useDispatch();

  // const [name, setName] = useState("");
  // const [id, setId] = useState(null);
  // const [number, setNumber] = useState("");
  // const contact = { name, number };

  const handleInputName = (ev) => {
    // setId(uuidv4());
    // setName(ev.currentTarget.value);
    // console.log(ev.currentTarget.value);
  };

  // const reset = (e) => {
  //   setName("");
  //   // setId(null);
  //   setNumber("");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addContact(e.target.name.value, e.target.number.value));

    console.dir(e.target.name.value);
    console.dir(e.target.number.value);
    e.target.name.value = "";
    e.target.number.value = "";

    // props.onSubmit(contact);

    // reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          // value={name}
          onChange={handleInputName}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из 5ти и более цифр, и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          // value={number}
          // onChange={(ev) => setNumber(ev.currentTarget.value)}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
