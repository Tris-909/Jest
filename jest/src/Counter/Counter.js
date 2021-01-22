import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(1);

  const decreaseHandler = (e) => {
    if (value > 0) {
      setValue(value - 1);
    }
  }

  return(
    <div data-test="component-app">
      <h1 data-test="component-counter">Counter : <span data-test='counter-value'>{value}</span></h1>
      
      {
        value === 0 ? (
          <h3 data-test="warning-text" style={{color: "red"}}> You can't decrease counter value below 0 </h3>
        ) : null 
      }

      <button 
        data-test="increment-button" 
        onClick={() => setValue(value+1)}> 
          Increment 
      </button>

      <button 
        data-test="decrement-button"
        onClick={() => decreaseHandler()}> 
          Decrement 
      </button>
    </div>
  );
}

export default Counter;