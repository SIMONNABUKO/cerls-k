import React, { Component } from 'react';
import Portfolio from './MiniComponents/Portfolio';
import Header from '../Header';
import Footer from '../Footer';

export class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default Index;
