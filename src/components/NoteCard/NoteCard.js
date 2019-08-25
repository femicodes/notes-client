import React from 'react';
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import './NoteCard.scss';

const NoteCard = () => {
  return (
    <div className="top">
      <div className="note-card">
        <div className="note-title">My first note</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum elit a dui posuere, sit amet molestie nulla rutrum. Vivamus ullamcorper accumsan lectus, eu malesuada nulla luctus sed.
        </div>
        <hr />
        <FaPencilAlt className="ico card-icon-edit" /> <FaTrashAlt className="ico card-icon-delete" />
      </div>

      <div className="note-card">
        <div className="note-title">My first note</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum elit a dui posuere, sit amet molestie nulla rutrum. Vivamus ullamcorper accumsan lectus, eu malesuada nulla luctus sed.
        </div>
        <hr />
        <FaPencilAlt className="ico card-icon-edit" /> <FaTrashAlt className="ico card-icon-delete" />
      </div>

      <div className="note-card">
        <div className="note-title">My first note</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum elit a dui posuere, sit amet molestie nulla rutrum. Vivamus ullamcorper accumsan lectus, eu malesuada nulla luctus sed.
        </div>
        <hr />
        <FaPencilAlt className="ico card-icon-edit" /> <FaTrashAlt className="ico card-icon-delete" />
      </div>

    </div>
  );
};

export default NoteCard;
