import React, { Component } from 'react';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import css from './NoContactsInfo.module.css';

export default class NoContactsInfo extends Component {
  render() {
    return (
      <div className={css.notify}>
        <div>
          <b>Ooops...</b>
        </div>
        <p>
          <BsEmojiSmileUpsideDown /> There are no contacts here
        </p>
      </div>
    );
  }
}
