import React, { useState } from 'react';
import '../Calculator.css'
function App() {
  const [display, setDisplay] = useState('0');

  // Simple function to show typing on screen
  const handleClick = (value) => {
    setDisplay(prev => prev === '0' ? value : prev + value);
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        {/* Display Screen */}
        <div className="display">
          {display}
        </div>

        {/* Keypad Grid */}
        <div className="keypad">
          {/* Row 1 */}
          <button className="btn gray" onClick={() => setDisplay('0')}>AC</button>
          <button className="btn gray">+/-</button>
          <button className="btn gray">%</button>
          <button className="btn orange">÷</button>

          {/* Row 2 */}
          <button className="btn dark" onClick={() => handleClick('7')}>7</button>
          <button className="btn dark" onClick={() => handleClick('8')}>8</button>
          <button className="btn dark" onClick={() => handleClick('9')}>9</button>
          <button className="btn orange">×</button>

          {/* Row 3 */}
          <button className="btn dark" onClick={() => handleClick('4')}>4</button>
          <button className="btn dark" onClick={() => handleClick('5')}>5</button>
          <button className="btn dark" onClick={() => handleClick('6')}>6</button>
          <button className="btn orange">-</button>

          {/* Row 4 */}
          <button className="btn dark" onClick={() => handleClick('1')}>1</button>
          <button className="btn dark" onClick={() => handleClick('2')}>2</button>
          <button className="btn dark" onClick={() => handleClick('3')}>3</button>
          <button className="btn orange">+</button>

          {/* Row 5 (Zero spans two columns) */}
          <button className="btn dark zero" onClick={() => handleClick('0')}>0</button>
          <button className="btn dark">.</button>
          <button className="btn orange">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;