import React from "react";
import s from "../ContactForm/ContactForm.module.css";

export default class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  onChange = (event) => {
    this.setState({ name: event.currentTarget.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };

  onChangeNumber = (event) => {
    this.setState({ number: event.currentTarget.value });
  };

  render() {
    return (
      <>
        <form className={s.form} onSubmit={this.onSubmit}>
          <p className={s.name}>Name</p>
          <input
            className={s.input}
            type="text"
            onChange={this.onChange}
            value={this.state.name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <p className={s.name}>Number</p>
          <input
            className={s.input}
            type="tel"
            onChange={this.onChangeNumber}
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />

          <button className={s.button} type="onSubmit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
