/* eslint-disable react/prefer-stateless-function */
/* eslint-disable */
import React from 'react';
import calculate from '../Logic/calculate';
import './Calculator.css';


class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }
  render = () => {
    const addInput = (event) => {
      let clickedNumber = event.target.innerText;
      
      if(this.state.operation === null && this.state.next === null) {
        if(this.state.total === 0 || this.state.total === '0') {
          this.state.total = '';
        }
        const temp = this.state.total + clickedNumber.toString();
        this.setState({total: temp});
      } else if(this.state.operation !== null && this.state.total !== null) {
        this.state.next === null ? this.setState({next: clickedNumber.toString()}) :
        this.setState({next: this.state.next + clickedNumber.toString()});
        console.log(this.state.next);
      }

}
  

    const addOperation = (event) => {
      const clickedOperation = event.target.innerText;
      this.setState({ operation: clickedOperation.toString() });
    }

    const callEqual = (event) => {
      const clickedEqual = event.target.innerText;
      const result = calculate(this.state, clickedEqual);
      console.log(result)
      this.setState(result);
    }

   const callAC = (event) => {
      const clickedAC = event.target.innerText;
      const result = calculate(this.state, clickedAC);
      console.log(result)
      this.setState(result);
    }

    const callReverse = (event) => {
      const clickedReverse = event.target.innerText;
      const result = calculate(this.state, clickedReverse);
      console.log(result)
      this.setState(result);
    }

    const callDot = (event) => {
      const clickedReverse = event.target.innerText;
      console.log(clickedReverse);
      const result = calculate(this.state, clickedReverse);
      console.log(result)
      this.setState(result);
    }



    return(
      <div className="calculator">
        <input type="text" value={this.state.operation === null? this.state.total: this.state.next} className="calcInput" />
        <div className="make-flex">
          <div className="row">
            <button type="button" onClick={callAC}  className="calcButton">AC</button>
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
  }
}

export default Calculator;
