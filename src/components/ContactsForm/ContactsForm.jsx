import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactsAppCaption from 'components/ContactsAppCaption/ContactsAppCaption';
import css from './ContactsForm.module.css';

export default class ContactsForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleContactData = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  getContactFormData = e => {
    e.preventDefault();
    const { name, phone } = this.state;

    if (this.props.handleSubmitForm(name, phone)) {
      this.setState({
        name: '',
        phone: '',
      });
      return;
    }
  };

  render() {
    const { name, phone } = this.state;
    const { handleContactData, getContactFormData } = this;
    return (
      <form onSubmit={getContactFormData} className={css.form}>
        <div className={css.inputWrapper}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleContactData}
          />
        </div>
        <ContactsAppCaption>Number</ContactsAppCaption>
        <div className={css.inputWrapper}>
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleContactData}
            value={phone}
          />
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};
