import React, { Component } from 'react';

export class EditNoteForm extends Component {
  render() {
    return (
      <div className="form-head">
        <form className="main-form">
          <p>Edit note</p>
          <input className="form-input" placeholder="Title" type="title" name="title" min="5" maxlength="70" /><br />
          <textarea maxlength="1000" placeholder="Body" />
          <button>Submit</button>
        </form>
      </div>
    );
  };
};

export default EditNoteForm;
