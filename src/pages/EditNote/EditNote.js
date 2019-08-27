import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import EditNoteContent from '../../components/EditNoteContent/EditNoteContent';

export class EditNote extends Component {
  render() {
    return (
      <div className="parent">
        <Navbar />
        <EditNoteContent loc={this.props} />
      </div>
    );
  };
};

export default EditNote;
