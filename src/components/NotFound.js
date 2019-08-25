import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      WRONG PAGE<br />
      Go <Link to="/">home</Link> kiddo
    </div>
  )
}

export default NotFound;
