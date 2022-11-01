import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaAtom } from 'react-icons/fa';

export default function Header() {
  return (
    <nav className="navbar-bg">
      <div className="logo-bg">
        <FaAtom className="logo" />
        <p className="logo-name">Mathematics</p>
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Calculator</Link></li>
        <li><Link to="/contact">Quote</Link></li>
      </ul>
    </nav>
  );
}
