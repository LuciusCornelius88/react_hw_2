import { Component } from 'react';
import { nanoid } from 'nanoid';
import InputForm from './InputForm/InputForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

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

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );

    return (
      <div className="container">
        <InputForm onSubmit={this.onSubmit} onReset={this.onReset} onChange={this.onChange} />
        <div className="phonebook-list-container">
          <h2 className="main-title">Contacts</h2>
          <Filter onChange={this.onChange} />
          <ContactsList filteredContacts={filteredContacts} onDelete={this.onDelete} />
        </div>
      </div>
    );
  }
}

export default AppPhonebook;
