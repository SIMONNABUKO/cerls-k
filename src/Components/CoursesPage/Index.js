import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Courses from './Courses';

function Index(props) {
  return (
    <div>
      <Header login={props.login} state={props.state} logout={props.logout} />
      <Courses state={props.state} />
      <Footer />
    </div>
  );
}

export default Index;
