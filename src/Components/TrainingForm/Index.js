import React, { Component } from 'react';
import TrainingForm from './TrainingForm';
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
        <TrainingForm
          handleTraineeForm={this.props.handleTraineeForm}
          state={this.props.state}
          handleChange={this.props.handleChange}
        />

        <Footer />
      </div>
    );
  }
}

export default Index;
