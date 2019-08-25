import React, { Component } from 'react';
import '../Content/Content.scss';
import NoteForm from '../NoteForm/NoteForm';

export class NoteContent extends Component {
  render() {
    return (
      <div className="content">
        <div className="content-header">
          <div className="items">

            <div className="first">
              <button>Log out</button>
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

export default NoteContent;
