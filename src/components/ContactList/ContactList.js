import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";
import s from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      <ul className={s.list}>
        {contacts.map((contact) => (
          <ContactListItem
            contact={contact}
            onDelete={onDelete}
            key={contact.id}
          />
        ))}
      </ul>
    </>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDelete: PropTypes.func.isRequired,
};
