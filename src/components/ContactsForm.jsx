import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addContact } from "../redux/operations/operations";
import "./css/contacts.css";

export default function ContactsForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="add-inputs">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>Number</label>
          <input
            type="tel"
            name="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button
            type="submit"
            onClick={() => {
              dispatch(addContact({ name, number: num }));
              setName("");
              setNum("");
            }}
            disabled={isLoading}
          >
            Додати контакт
          </button>
          {isLoading && <p>Додаємо контакт...</p>}
        </div>
      </form>
    </>
  );
}
