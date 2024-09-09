import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  return (
    <div className="nav">
      <span>
        <Link to="/" className="link" id="logo">
          Shopkeeper
        </Link>
      </span>
      <div className="links">
        <Link className="link">Clothing</Link>
        <Link className="link">Footwear</Link>
        <Link className="link">Accessories</Link>
        <Link to="/SignIn" className="link">
          Sign in
        </Link>
        <Link to="/SignUp" className="link">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
