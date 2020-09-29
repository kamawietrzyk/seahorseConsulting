import React from 'react';
import About from './About';
import Blog from './Blog';
import Company from './Company';
import Contact from './Contact';
import References from './References';
import ScrollToTop from './ScrollToTop';

const Home = () => (
    <>
        <ScrollToTop />
        <Company />
        <About />
        <Blog />
        <References />
        <Contact />
    </>
)

export default Home
