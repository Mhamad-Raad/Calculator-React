/* eslint-disable react/prefer-stateless-function */

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import React from 'react';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
