import React from 'react';
import './App.css';
import Timer from './components/Timer';
// // -- Redux -- //
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import reducers from './reducers';
// const store = createStore(reducers);
// // -- // >> Moved to src/index.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer name="one"/>
      </header>
      
    </div>
  );
}

export default App;
