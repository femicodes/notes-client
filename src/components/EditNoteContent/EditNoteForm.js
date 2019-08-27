import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getOne, updateOne } from '../../utils/request';

export class EditNoteForm extends Component {
  state = {
    title: '',
    body: ''
  }

  componentDidMount() {
    const token = localStorage.getItem('user_token');
    const id = this.props.locat.match.params.id;

    getOne(id, token).then(res => {
      this.setState({
        title: res.data.title,
        body: res.data.body
      });
    })
  };

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  submitChange = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('user_token');
    const id = this.props.match.params.id;
    const note = {
      title: this.state.title,
      body: this.state.body,
    };

    updateOne(id, note, token).then(() => {
      this.props.history.push('/dashboard');
    });
  }

  render() {
    return (
      <div className="form-head">
        <form className="main-form" onSubmit={this.submitChange}>
          <p>Edit note</p>
          <input className="form-input" onChange={this.handleChange} placeholder="Title" type="title" name="title" min="5" maxLength="70" value={this.state.title} /><br />
          <textarea maxLength="1000" name="body" onChange={this.handleChange} placeholder="Body" value={this.state.body} />
          <button>Submit</button>
        </form>
      </div>
    );
  };
};

export default withRouter(EditNoteForm);
