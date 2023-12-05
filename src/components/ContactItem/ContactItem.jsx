const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className="contact-item">
      <p>{contact.name}:</p>
      <p>{contact.number}</p>
      <button type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
