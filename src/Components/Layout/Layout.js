import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './LayoutComponents/Header';
import Footer from './LayoutComponents/Footer';
import Home from '../UI/Home';
import CalcHome from '../UI/ClacHome';

export default function Layout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<CalcHome />} />
      </Routes>
      <Footer />
    </>
  );
}
