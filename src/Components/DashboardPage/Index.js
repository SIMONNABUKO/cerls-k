import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

function Index(props) {
  return (
    <div>
      <Header />
      <h2>This is the student's dashboard</h2>
      <p>You are logged in as {props.name}</p>
      <Footer />
    </div>
  );
}

export default Index;
