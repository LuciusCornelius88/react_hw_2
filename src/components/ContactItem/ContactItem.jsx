import { ContactContainer, ContactLi, ContactData, DeleteButton } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDelete }) => {
  return (
    <ContactLi>
      <ContactContainer className="contact-item">
        <ContactData>{contact.name}:</ContactData>
        <ContactData>{contact.number}</ContactData>
        <DeleteButton type="button" onClick={() => onDelete(contact.id)}>
          Delete
        </DeleteButton>
      </ContactContainer>
    </ContactLi>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.elementType.isRequired,
};

export default ContactItem;
