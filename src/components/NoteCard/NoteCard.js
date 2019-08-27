import React, { Component } from 'react';
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import './NoteCard.scss';
import { deleteNote } from '../../utils/request';

export class NoteCard extends Component {
  click = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('user_token');
    const id = this.props.id;

    deleteNote(id, token);
  }

  render() {
    return (
      <div className="top">
        <div className="note-card">
          <div className="note-title">{this.props.title}</div>
          <div className="description">
            {this.props.body}
          </div>
          <hr />
          <Link to={`/edit/${this.props.id}`}><FaPencilAlt className="ico card-icon-edit" /></Link>
          <FaTrashAlt onClick={this.click} className="ico card-icon-delete" />

        </div>

      </div>
    )
  }
}

export default withRouter(NoteCard);
