import React from 'react';
import { FaBook, FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({ path }) => {
  return (
    <div className="nav-main">
      <div className="nav-logo">
        <p>Notes</p>
      </div>
      <div className="nav">
        <ul>
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard"><li><FaBook className="img" /> My notes</li></Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/add"><li><FaPlus className="img" /> Add new</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
