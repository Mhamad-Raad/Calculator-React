import React, { useState } from 'react';
import calculate from '../Logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const addInput = (event) => {
    const clickedNumber = event.target.innerText;
    if (operation === null && next === null) {
      if (total === 0 || total === '0') {
        setTotal('');
      }
      const temp = total.toString() + clickedNumber.toString();
      setTotal(temp);
    } else if (operation !== null && total !== null) {
      if (next === null) {
        setNext(clickedNumber.toString());
      } else {
        const temp = next.toString() + clickedNumber.toString();
        setNext(temp);
      }
    }
  };

  const addOperation = (event) => {
    const clickedOperation = event.target.innerText;
    setOperation(clickedOperation.toString());
  };

  const callEqual = (event) => {
    const clickedEqual = event.target.innerText;
    const result = calculate({ total, next, operation },
      clickedEqual);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  const callAC = (event) => {
    const clickedAC = event.target.innerText;
    const result = calculate({ total, next, operation }, clickedAC);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  const callReverse = (event) => {
    const clickedReverse = event.target.innerText;
    const result = calculate({ total, next, operation }, clickedReverse);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  const callDot = (event) => {
    const clickedReverse = event.target.innerText;
    const result = calculate({ total, next, operation }, clickedReverse);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };
  return (
    <div className="calculator">
      <input type="text" readOnly value={operation === null ? total : next} className="calcInput" />
      <div className="make-flex">
        <div className="row">
          <button type="button" onClick={callAC} className="calcButton">AC</button>
          <button type="button" onClick={callReverse} className="calcButton">+/-</button>
          <button type="button" onClick={addOperation} className="calcButton">%</button>
          <button type="button" onClick={addOperation} className="calcButton orange">÷</button>
        </div>

        <div className="row">
          <button type="button" onClick={addInput} className="calcButton">7</button>
          <button type="button" onClick={addInput} className="calcButton">8</button>
          <button type="button" onClick={addInput} className="calcButton">9</button>
          <button type="button" onClick={addOperation} className="calcButton orange">x</button>
        </div>

        <div className="row">
          <button type="button" onClick={addInput} className="calcButton">4</button>
          <button type="button" onClick={addInput} className="calcButton">5</button>
          <button type="button" onClick={addInput} className="calcButton">6</button>
          <button type="button" onClick={addOperation} className="calcButton orange">-</button>
        </div>

        <div className="row">
          <button type="button" onClick={addInput} className="calcButton">1</button>
          <button type="button" onClick={addInput} className="calcButton">2</button>
          <button type="button" onClick={addInput} className="calcButton">3</button>
          <button type="button" onClick={addOperation} className="calcButton orange">+</button>
        </div>

        <div className="row">
          <button type="button" onClick={addInput} className="calcButton zero">0</button>
          <button type="button" onClick={callDot} className="calcButton dot">.</button>
          <button type="button" onClick={callEqual} className="calcButton orange equal">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
