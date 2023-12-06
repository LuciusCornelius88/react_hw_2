import { ContactContainer, ContactLi, ContactData, DeleteButton } from './ContactItem.styled';

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

export default ContactItem;
