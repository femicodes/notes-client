import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      WRONG PAGE
      Go <Link to="/">home</Link> kiddo
    </div>
  )
}

export default NotFound;
