import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import EditNoteForm from './EditNoteForm';

export class EditNoteContent extends Component {
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
          <EditNoteForm locat={this.props.loc} />
        </div>
      </div>
    );
  };
};

export default withRouter(EditNoteContent);
