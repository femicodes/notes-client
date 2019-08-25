import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NoteContent from '../../components/NoteContent/NoteContent';

export class AddNew extends Component {
  render() {
    return (
      <div className="parent">
        <Navbar />
        <NoteContent />
      </div>
    );
  };
};

export default AddNew;
