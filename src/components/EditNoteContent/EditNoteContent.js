import React, { Component } from 'react';
import EditNoteForm from './EditNoteForm';

export class EditNoteContent extends Component {
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
          <EditNoteForm locat={this.props.loc} />
        </div>
      </div>
    );
  };
};

export default EditNoteContent;
