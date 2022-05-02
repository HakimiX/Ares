import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <div className="container">
        <div className="topnav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/persons" className="nav-link">Persons</Link>
          <Link to="/companies" className="nav-link">Companies</Link>
          <Link to="/addresses" className="nav-link">Addresses</Link>
          <Link to="/posts" className="nav-link">Posts</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav;
