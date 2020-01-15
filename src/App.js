import React from 'react';
import Header from './Components/HomePage/Header';
import Carousel from './Components/HomePage/Carousel';
import Feature from './Components/HomePage/Feature';
import About from './Components/HomePage/About';
import Lates from './Components/HomePage/Lates';
import Partner from './Components/HomePage/Partner';
import Contact from './Components/HomePage/Contact';
import Footer from './Components/HomePage/Footer';
import './App.css';

const App = () => (
  <>
    <Header />
    <Carousel />
    <Feature />
    <About />
    <Lates />
    <Partner />
    <Contact />
    <Footer />
  </>
);

export default App;
