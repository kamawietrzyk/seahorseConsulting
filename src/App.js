import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Company from './components/Company';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-container">
        <Company />
      </div>
    </div>
  );
}

export default App;
