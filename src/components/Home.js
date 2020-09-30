import React from 'react';
import About from './About';
import Blog from './Blog';
import Company from './Company';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import References from './References';
import ScrollToTop from './ScrollToTop';

const Home = () => (
    <>
        <Header />
        <div className="App-container">
            <ScrollToTop />
            <Company />
            <About />
            <Blog />
            <References />
            <Contact />
        </div>
        <Footer />
    </>
)

export default Home
