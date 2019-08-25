import React, { Component } from 'react';
import './NoteForm.scss';

export class NoteForm extends Component {
  render() {
    return (
      <div className="form-head">
        <form className="main-form">
          <p>Create a new note</p>
          <input className="form-input" placeholder="Title" type="title" name="title" min="5" maxlength="70" /><br />
          <textarea maxlength="1000" placeholder="Body" />
          <button>Submit</button>
        </form>
      </div>
    );
  };
};

export default NoteForm;
