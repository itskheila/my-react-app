import { useState } from "react";

function SimpleState() {
  const state= useState(0);
  
  const increment = () => {
    console.log(state);
    let currentState = state[0];
    let newState = currentState + 1;
    let updateStateFunction = state[1];
    
    updateStateFunction(newState);
   
  };

  return (
    <div>
      <div>
        <button onClick={increment}>Click Me</button>
      </div>
      <h3>Clicked {state[0]}</h3>
    </div>
  )
    
}

export default SimpleState;