import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Company from './components/Company';
import About from './components/About';
import References from './components/References';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-container">
        <Company />
        <About />
        <References />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
