import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BiUserCircle } from 'react-icons/bi';
import { BsXCircle } from 'react-icons/bs';
import css from './ContactsList.module.css';
import DeleteButton from 'components/DeleteButton/DeleteButton';
import NoContactsInfo from 'components/NoContactsInfo/NoContactsInfo';

export default class ContactsList extends Component {
  render() {
    const { showFilteredContacts, handleDeleteContact } = this.props;
    return (
      <>
        <ul className={css.contactList}>
          {showFilteredContacts.length ? (
            showFilteredContacts.map(contact => (
              <li className={css.contactItem} key={contact.id}>
                <p className={css.contactInfoWrapper}>
                  <BiUserCircle className={css.contactIcon} />
                  <span className={css.contactName}>{contact.name}:</span>&nbsp;
                  <span className={css.contactPhone}>{contact.phone}</span>
                </p>

                <DeleteButton
                  type="button"
                  onDeleteContact={handleDeleteContact}
                  id={contact.id}
                  actionText=" Delete"
                >
                  <BsXCircle />
                </DeleteButton>
              </li>
            ))
          ) : (
            <NoContactsInfo />
          )}
        </ul>
      </>
    );
  }
}

ContactsList.propTypes = {
  showFilteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};
