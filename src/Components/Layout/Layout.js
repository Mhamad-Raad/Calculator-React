import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import Header from './LayoutComponents/Header';
import Footer from './LayoutComponents/Footer';
import Home from '../UI/Home';
import CalcHome from '../UI/ClacHome';
import Quote from '../UI/Quote';
import MobileNav from '../UI/MobileNav';

export default function Layout() {
  const [toggle, setToggle] = useState(false);
  const toggleNav = () => setToggle((prevState) => !prevState);

  return (
    <>
      {toggle && (
      <MobileNav>
        <>
          <IoMdClose onClick={toggleNav} className="closeIcon" />
          <ul className="mobile-ul">
            <li className="mobile-li"><Link to="/" onClick={toggleNav}>Home</Link></li>
            <li><Link to="/about" className="mobile-li" onClick={toggleNav}>Calculator</Link></li>
            <li><Link to="/Quote" className="mobile-li" onClick={toggleNav}>Quote</Link></li>
          </ul>
        </>
      </MobileNav>
      )}
      <Header togglenav={toggleNav} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<CalcHome />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
      <Footer />
    </>
  );
}
