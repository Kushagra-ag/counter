import React, {useState} from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(1);

  const handleInc = () => {
    setCounter(counter+1)
  }

  const handleDec = () => {
    setCounter(counter-1)
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>React Counter </h1>
        <input value={counter} disabled></input><br/>
        <div style={{display:'flex'}}>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
