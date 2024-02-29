import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todo from './Todo';
import UseEffectDemo from './UseEffectDemo';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Counter/> */}
      <Todo/>
      {/* <UseEffectDemo/> */}
    </div>
    // loading concept
    // api fetchusing axious 
    // create a db file for storing the data 
    // add pagination 
  );
}

export default App;
