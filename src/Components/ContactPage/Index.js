import React from 'react';
import Contact from './Contact';
import Header from '../Header';
import Footer from '../Footer';

function Index(props) {
  return (
    <div>
      <Header />
      <Contact
        handleChange={props.handleChange}
        state={props.state}
        handleSubmit={props.handleSubmit}
      />
      <Footer />
    </div>
  );
}

export default Index;
