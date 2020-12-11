import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Main}/>
      </Router>
    </div>
  );
}

export default App;
