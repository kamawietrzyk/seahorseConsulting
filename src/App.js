import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Company from './components/Company';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-container">
        <Company />
        <About />
      </div>
    </div>
  );
}

export default App;
