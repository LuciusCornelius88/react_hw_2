import { Component } from 'react';
import { nanoid } from 'nanoid';

import InputForm from './InputForm/InputForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

import { Container, Subtitle } from './App_phonebook.styled';

const INIT_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: '',
};

class AppPhonebook extends Component {
  state = {
    ...INIT_STATE,
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.contacts.some((contact) => contact.name === this.state.name)) {
      alert(`${this.state.name} is already in the contacts list!`);
      this.resetForm();
    } else {
      this.setState((prevState) => ({ contacts: [...prevState.contacts, { id: nanoid(), name: this.state.name, number: this.state.number }] }));
    }
    evt.target.reset();
  };

  onReset = (evt) => {
    evt.target.reset();
  };

  resetForm = () => {
    this.setState({
      filter: '',
      name: '',
      number: '',
    });
  };

  onDelete = (id) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts.filter((contact) => contact.id !== id)],
    }));
  };

  componentDidMount() {
    document.body.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    document.body.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseUp = () => {
    const focusedButton = document.activeElement;
    if (focusedButton.tagName === 'BUTTON') {
      focusedButton.blur();
    }
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );

    return (
      <Container className="container" onMouseUp={this.handleMouseUp}>
        <InputForm onSubmit={this.onSubmit} onReset={this.onReset} onChange={this.onChange} />
        <div className="phonebook-list-container">
          <Subtitle className="main-title">Contacts</Subtitle>
          <Filter onChange={this.onChange} />
          <ContactsList filteredContacts={filteredContacts} onDelete={this.onDelete} />
        </div>
      </Container>
    );
  }
}

export default AppPhonebook;
