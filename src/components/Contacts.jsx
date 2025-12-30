import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/slice/phonebookSlice";
import "./css/contacts.css";

export default function Contacts() {
  const phoneBook = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const visibleContacts = phoneBook.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()) ||
  contact.number.toLowerCase().includes(filter.toLowerCase()));
  
  return (
    <>
      <ul>
        <div className="filter-contacts">
        {visibleContacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => dispatch(deleteContact(contact.id))}>Видалити контакт</button>
            </li>
        ))}
        </div>
      </ul>
    </>
  )
}

