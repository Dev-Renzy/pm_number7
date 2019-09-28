import React from 'react';
import logo from './logo.svg';
import './App.css';
import RenderList from './RenderList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="table">
        <p>
          <RenderList/>
        </p>
        </div>
      </header>
    </div>
  );
}

export default App;
