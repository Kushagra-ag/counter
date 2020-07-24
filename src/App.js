import React, {useState} from 'react';
import './App.css';
import CounterButton from './components/CounterButton.js';

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

        <CounterButton type="increase" method={handleInc} />
        <CounterButton type="decrease" method={handleDec} />

        </div>
        
      </div>
    </div>
  );
}

export default App;
