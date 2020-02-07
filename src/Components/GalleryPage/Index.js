import React, { Component } from 'react';
import Portfolio from './MiniComponents/Portfolio';
import Header from '../Header';
import Footer from '../Footer';

export class Index extends Component {
  render() {
    return (
      <div>
        <Header
          login={this.props.login}
          state={this.props.state}
          logout={this.props.logout}
        />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default Index;
