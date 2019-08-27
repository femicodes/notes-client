import React from 'react';
import './Slab.scss';

const Slab = ({ count }) => {
  return (
    <div className="mainOne">
      <p>My Notes</p>
      <div className="right">
        <div className="slab-card">
          <div className="total-paid">You have</div>
          <div className="amount">{count} notes</div>
        </div>
      </div>
    </div>

  );
};

export default Slab;
