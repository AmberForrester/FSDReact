
import { useCallback, useState } from 'react';
import React from 'react';
import './App.css';

function ChildComponent({onClick}) {
  console.log('Child Component is rendered.');
  return(
    <>
    <button onClick={onClick}>Click Me</button>
    </>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState("My Initial Text");
  
  const incrementCount = useCallback(() => {setCount((prevCount) => prevCount + 1 )}, [setCount]);

  return (
    <div className="App">
      <p>Text: {txt}</p>
      <p>Count: {count}</p>
      <button onClick={() => setTxt("Hello this is the NEW text")}>Set Text</button>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <ChildComponent onClick={incrementCount}/>
    </div>
  );
}

export default App;
