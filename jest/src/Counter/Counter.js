import React, {useState} from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  const decreaseHandler = () => {

    if (value > 0) {
      setValue(value - 1);
    }
  }

  return(
    <div data-test='app-component'>
      <h1 data-test='counter-display'>Counter: <span data-test='counter-value'>{value}</span></h1>
      { value === 0 ? (
        <h3 data-test='warning-text' style={{color: 'red'}}> You can't decrease this value below 0 </h3>
      ) : null} 
      <button
        data-test='increment'  
        onClick={() => setValue(value+1)}
      >
        INCREMENT
      </button>
      <button
        data-test='decrement'     
        onClick={() => decreaseHandler()}
      >
        DECREMENT
      </button>
    </div>
  );
}

export default Counter;