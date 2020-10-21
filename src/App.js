import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Counter App (Redux_Toolkit)</h2>
        <Counter />
      </header>
    </div>
  );
}

export default App;
