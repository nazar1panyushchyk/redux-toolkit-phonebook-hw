import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editContact, deleteContact } from "../redux/operations/operations";
import "./css/contacts.css";

export default function Contacts() {
  const phoneBook = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const isDeleting = useSelector((state) => state.contacts.isDeleting);
  const [editingId, setEditingId] = useState(null);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const dispatch = useDispatch();

  const visibleContacts = phoneBook.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className="filter-contacts">
        <ul>
          {visibleContacts.map((contact) => (
            <li key={contact.id}>
              {contact.id === editingId ? (
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      dispatch(editContact({ id: editingId, name, number }));
                      setEditingId(null);
                    }}
                  >
                    Зберегти
                  </button>
                  <button
                    onClick={() => {
                      setEditingId(null);
                      setName("");
                      setNumber("");
                    }}
                  >
                    Скасувати
                  </button>
                </div>
              ) : (
                <>
                  {contact.name}: {contact.number}
                  <button
                    onClick={() => {
                      setEditingId(contact.id);
                      setName(contact.name);
                      setNumber(contact.number);
                    }}
                  >
                    Редагувати
                  </button>
                  <button
                    onClick={() => {
                      setDeletingId(contact.id);
                      dispatch(deleteContact(contact.id)).finally(() =>
                        setDeletingId(null)
                      );
                    }}
                    disabled={isDeleting}
                  >
                    Видалити
                  </button>
                  {deletingId === contact.id && <p>Видаляємо контакт...</p>}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
