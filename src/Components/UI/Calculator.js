/* eslint-disable react/prefer-stateless-function, react/destructuring-assignment, no-nested-ternary, max-len */
// /* eslint-disable */
import React from 'react';
import calculate from '../Logic/calculate';
import './Calculator.css';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
      operation: null,
    };
  }

  addInput = (event) => {
    const clickedNumber = event.target.innerText;
    if (this.state.operation === null && this.state.next === null) {
      if (this.state.total === 0 || this.state.total === '0') {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.total = '';
      }
      // eslint-disable-next-line react/no-access-state-in-setstate
      const temp = this.state.total.toString() + clickedNumber.toString();
      this.setState({ total: temp });
    } else if (this.state.operation !== null && this.state.total !== null) {
      if (this.state.next === null) {
        this.setState({ next: clickedNumber.toString() });
      } else {
        // eslint-disable-next-line no-unused-expressions
        // eslint-disable-next-line react/no-access-state-in-setstate
        const temp = this.state.next.toString() + clickedNumber.toString();
        this.setState({ next: temp });
      }
    }
  };

  addOperation = (event) => {
    const clickedOperation = event.target.innerText;
    this.setState({ operation: clickedOperation.toString() });
  };

  callEqual = (event) => {
    const clickedEqual = event.target.innerText;
    const result = calculate(this.state, clickedEqual);
    this.setState(result);
  };

  callAC = (event) => {
    const clickedAC = event.target.innerText;
    const result = calculate(this.state, clickedAC);
    this.setState(result);
  };

  callReverse = (event) => {
    const clickedReverse = event.target.innerText;
    const result = calculate(this.state, clickedReverse);
    this.setState(result);
  };

  callDot = (event) => {
    const clickedReverse = event.target.innerText;
    const result = calculate(this.state, clickedReverse);
    this.setState(result);
  };

  render = () => (
    <div className="calculator">
      <input type="text" readOnly value={this.state.operation === null ? this.state.total : this.state.next === null ? 0 : this.state.next} className="calcInput" />
      <div className="make-flex">
        <div className="row">
          <button type="button" onClick={this.callAC} className="calcButton">AC</button>
          <button type="button" onClick={this.callReverse} className="calcButton">+/-</button>
          <button type="button" onClick={this.addOperation} className="calcButton">%</button>
          <button type="button" onClick={this.addOperation} className="calcButton orange">÷</button>
        </div>

        <div className="row">
          <button type="button" onClick={this.addInput} className="calcButton">7</button>
          <button type="button" onClick={this.addInput} className="calcButton">8</button>
          <button type="button" onClick={this.addInput} className="calcButton">9</button>
          <button type="button" onClick={this.addOperation} className="calcButton orange">x</button>
        </div>

        <div className="row">
          <button type="button" onClick={this.addInput} className="calcButton">4</button>
          <button type="button" onClick={this.addInput} className="calcButton">5</button>
          <button type="button" onClick={this.addInput} className="calcButton">6</button>
          <button type="button" onClick={this.addOperation} className="calcButton orange">-</button>
        </div>

        <div className="row">
          <button type="button" onClick={this.addInput} className="calcButton">1</button>
          <button type="button" onClick={this.addInput} className="calcButton">2</button>
          <button type="button" onClick={this.addInput} className="calcButton">3</button>
          <button type="button" onClick={this.addOperation} className="calcButton orange">+</button>
        </div>

        <div className="row">
          <button type="button" onClick={this.addInput} className="calcButton zero">0</button>
          <button type="button" onClick={this.callDot} className="calcButton dot">.</button>
          <button type="button" onClick={this.callEqual} className="calcButton orange equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
