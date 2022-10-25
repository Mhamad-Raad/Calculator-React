import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {

  render = () => (
    <div className="calculator">
      <input type="number" className="calcInput" />
      <div className="make-flex">
        <div className="row">
          <button type="button" className="calcButton">AC</button>
          <button type="button" className="calcButton">+/-</button>
          <button type="button" className="calcButton">%</button>
          <button type="button" className="calcButton orange">÷</button>
        </div>

        <div className="row">
          <button type="button" className="calcButton">7</button>
          <button type="button" className="calcButton">8</button>
          <button type="button" className="calcButton">9</button>
          <button type="button" className="calcButton orange">x</button>
        </div>

        <div className="row">
          <button type="button" className="calcButton">4</button>
          <button type="button" className="calcButton">5</button>
          <button type="button" className="calcButton">6</button>
          <button type="button" className="calcButton orange">-</button>
        </div>

        <div className="row">
          <button type="button" className="calcButton">1</button>
          <button type="button" className="calcButton">2</button>
          <button type="button" className="calcButton">3</button>
          <button type="button" className="calcButton orange">+</button>
        </div>

        <div className="row">
          <button type="button" className="calcButton zero">0</button>
          <button type="button" className="calcButton dot">.</button>
          <button type="button" className="calcButton orange equal">=</button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
