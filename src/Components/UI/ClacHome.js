import React from 'react';
import Calculator from './Calculator';

import './CalcHome.css';

export default function CalcHome() {
  return (
    <div className="calc-home">
      <div className="left-side">
        <h1>Lets do some MATH</h1>
      </div>
      <div className="right-side">
        <Calculator />
      </div>
    </div>
  );
}
