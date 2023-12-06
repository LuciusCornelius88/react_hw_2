import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';

const ContactsList = ({ filteredContacts, onDelete }) => {
  return (
    <ul className="contacts-list">
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.elementType.isRequired,
};

export default ContactsList;
