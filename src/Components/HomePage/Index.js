import React, { Component } from 'react';
import Carousel from './MiniComponents/Carousel';
import Feature from './MiniComponents/Feature';
import About from './MiniComponents/About';
import Lates from './MiniComponents/Lates';
import Partner from './MiniComponents/Partner';
import Contact from './MiniComponents/Contact';
import Header from '../Header';
import Footer from '../Footer';

export class Index extends Component {
  constructor() {
    super();
    this.state = [];
  }
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Feature />
        <About />
        <Lates />
        <Partner />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Index;
