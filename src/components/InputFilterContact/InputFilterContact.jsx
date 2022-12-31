import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactsAppCaption from '../ContactsAppCaption/ContactsAppCaption';
import css from './InputFilterContact.module.css';

export default class InputFilterContact extends Component {
  render() {
    const { handleFilterContact, filter } = this.props;
    return (
      <div className={css.inputWrapper}>
        <ContactsAppCaption>Find contacts by name</ContactsAppCaption>
        <input
          type="text"
          name="filter"
          onChange={handleFilterContact}
          value={filter}
        />
      </div>
    );
  }
}

InputFilterContact.propTypes = {
  handleFilterContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
