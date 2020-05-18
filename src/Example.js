import React, { useState, useEffect } from 'react';
import './Example.css';

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  //Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    //Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button className="button"
        onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;
