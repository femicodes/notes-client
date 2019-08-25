import React from 'react';
import './Content.scss';
import Slab from '../Slab/Slab';
import NoteCard from '../NoteCard/NoteCard';

const Content = () => {
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
        <Slab />
        <NoteCard />
      </div>
    </div>
  );
};

export default Content;
