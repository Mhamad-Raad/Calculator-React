import React, { useState } from 'react';
import calculate from '../Logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <div className="calculator">
      <div type="text" className="calcInput">
        {state.next || state.total || '0'}
      </div>
      <div className="make-flex">
        <div className="row">
          <button type="button" onClick={handleClick} className="calcButton">AC</button>
          <button type="button" onClick={handleClick} className="calcButton">+/-</button>
          <button type="button" onClick={handleClick} className="calcButton">%</button>
          <button type="button" onClick={handleClick} className="calcButton orange">÷</button>
        </div>

        <div className="row">
          <button type="button" onClick={handleClick} className="calcButton">7</button>
          <button type="button" onClick={handleClick} className="calcButton">8</button>
          <button type="button" onClick={handleClick} className="calcButton">9</button>
          <button type="button" onClick={handleClick} className="calcButton orange">x</button>
        </div>

        <div className="row">
          <button type="button" onClick={handleClick} className="calcButton">4</button>
          <button type="button" onClick={handleClick} className="calcButton">5</button>
          <button type="button" onClick={handleClick} className="calcButton">6</button>
          <button type="button" onClick={handleClick} className="calcButton orange">-</button>
        </div>

        <div className="row">
          <button type="button" onClick={handleClick} className="calcButton">1</button>
          <button type="button" onClick={handleClick} className="calcButton">2</button>
          <button type="button" onClick={handleClick} className="calcButton">3</button>
          <button type="button" onClick={handleClick} className="calcButton orange">+</button>
        </div>

        <div className="row">
          <button type="button" onClick={handleClick} className="calcButton zero">0</button>
          <button type="button" onClick={handleClick} className="calcButton dot">.</button>
          <button type="button" onClick={handleClick} className="calcButton orange equal">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
