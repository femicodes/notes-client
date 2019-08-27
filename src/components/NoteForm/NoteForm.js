import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './NoteForm.scss';
import { addNote } from '../../utils/request';

export class NoteForm extends Component {
  titleRef = React.createRef();
  bodyRef = React.createRef();

  submitNote = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('user_token');
    const note = {
      title: this.titleRef.current.value,
      body: this.bodyRef.current.value
    };
    addNote(note, token).then(() => {
      this.props.history.push('/dashboard');
    });

  }

  componentDidMount() {
    const token = localStorage.getItem('user_token');

    if (!token) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="form-head">
        <form className="main-form" onSubmit={this.submitNote}>
          <p>Create a new note</p>
          <input className="form-input" ref={this.titleRef} placeholder="Title" type="title" name="title" min="5" maxLength="70" /><br />
          <textarea maxLength="1000" ref={this.bodyRef} placeholder="Body" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
};

export default withRouter(NoteForm);
