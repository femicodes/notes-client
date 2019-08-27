import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Content/Content.scss';
import NoteForm from '../NoteForm/NoteForm';

export class NoteContent extends Component {
  logOut = () => {
    localStorage.removeItem('user_token');
    this.props.history.push('/');
  };

  componentDidMount() {
    const token = localStorage.getItem('user_token');

    if (!token) {
      this.props.history.push('/');
    };
  };

  render() {
    return (
      <div className="content">
        <div className="content-header">
          <div className="items">

            <div className="first">
            <button onClick={this.logOut}>Log out</button>
            </div>
          </div>
        </div>
        <div>
          <NoteForm />
        </div>
      </div>
    );
  };
};

export default withRouter(NoteContent);
