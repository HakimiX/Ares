import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <div className="container">
        <div className="topnav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/persons" className="nav-link">Persons</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav;
