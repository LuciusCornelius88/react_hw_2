import ContactItem from '../ContactItem/ContactItem';

const ContactsList = ({ filteredContacts, onDelete }) => {
  return (
    <ul className="contacts-list">
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactsList;
