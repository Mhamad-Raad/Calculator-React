import React from 'react';
import './Quote.css';
import '../../App.css';

export default function Quote() {
  return (
    <div className="quote-bg flex">
      <h1 className="quote">
        &apos;Mathematics is not about numbers, equations, computations, or algorithms:
        it is about understanding &apos; and different ways of thinking.
        <b> __William Paul Thurston</b>
      </h1>
    </div>
  );
}
