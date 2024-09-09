import React from 'react';
import {Link} from 'react-router-dom';
import {FaCopyright, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <div className="ft1">
        <h2>Shopkeeper</h2>
        <p>
          Copyright{' '}
          <FaCopyright
            style={{color: 'white', fontSize: 'xx-small', textAlign: 'center'}}
          />{' '}
          {year} Shopkeeper: all rights reserved
        </p>
      </div>

      <div className="ft-links">
        <Link to="/about" className="ft-link">
          About this project
        </Link>
        <Link className="ft-link">Contact</Link>
        <Link className="ft-link">Support</Link>
      </div>
      <div className="icons">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
      </div>
    </div>
  );
};

export default Footer;
