import PropTypes from "prop-types";
import s from "../ContactListItem/ContactListItem.module.css";
export default function ContactListItem({ contact, onDelete }) {
  return (
    <div className={s.container}>
      <li className={s.item}>
        {contact.name}: {contact.number}
      </li>
      <button
        className={s.button}
        id={contact.id}
        type="button"
        onClick={(event) => onDelete(event.target.id)}
      >
        Delete
      </button>
    </div>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
