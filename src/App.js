import React from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import s from "./App.module.css";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  visibleContacts = () =>
    this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  onFormSubmit = (name, number) => {
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert(name + " is already in contacts");
      return;
    }
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { name: name, number: number, id: nanoid() },
      ],
    }));
  };

  onDelete = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <>
        <h1 className={s.mainTitle}>Phonebook</h1>
        <ContactForm onFormSubmit={this.onFormSubmit} />

        <Filter filter={this.state.filter} changeFilter={this.changeFilter} />

        <h2 className={s.title}>Contacts</h2>
        <ContactList
          contacts={this.visibleContacts()}
          onDelete={this.onDelete}
        />
      </>
    );
  }
}

export default App;
