import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaAtom } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import PropTypes from 'prop-types';

export default function Header({ togglenav }) {
  return (
    <nav className="navbar-bg">
      <div className="logo-bg">
        <FaAtom className="logo" />
        <p className="logo-name">Mathematics</p>
      </div>

      <ul className="desk-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Calculator</Link></li>
        <li><Link to="/Quote">Quote</Link></li>
      </ul>
      <CgMenuRight className="hamburger" onClick={togglenav} />
    </nav>
  );
}

Header.propTypes = {
  togglenav: PropTypes.func.isRequired,
};
