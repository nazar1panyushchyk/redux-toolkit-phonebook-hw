import "./App.css";
import Contacts from "../src/components/Contacts.jsx";
import Filter from "./components/Filter.jsx";
import ContactsForm from "./components/ContactsForm.jsx";
import "./components/css/contacts.css";

function App() {
  return (
    <>
      <ContactsForm />
      <Filter />
      <Contacts />
    </>
  );
}

export default App;
