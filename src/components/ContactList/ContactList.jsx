import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={s.contactsList}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))
      ) : (
        <p className={s.noMatches}>No matches found</p>
      )}
    </ul>
  );
}
