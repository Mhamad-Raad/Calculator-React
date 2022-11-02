import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './LayoutComponents/Header';
import Footer from './LayoutComponents/Footer';
import Home from '../UI/Home';
import CalcHome from '../UI/ClacHome';
import Quote from '../UI/Quote';

export default function Layout() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<CalcHome />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
      <Footer />
    </>
  );
}
