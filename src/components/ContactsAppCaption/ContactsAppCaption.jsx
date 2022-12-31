import React, { Component } from 'react';
import css from './ContactsAppCaption.module.css';
import PropTypes from 'prop-types';

export default class ContactsAppCaption extends Component {
  render() {
    return <div className={css.title}>{this.props.children}</div>;
  }
}

ContactsAppCaption.propTypes = {
  children: PropTypes.string.isRequired,
};
