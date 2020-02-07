import React from 'react';
import AboutUs from './MiniComponents/AboutUs';
import Team from './MiniComponents/Team';
import Header from '../Header';
import Footer from '../Footer';

function Index(props) {
  return (
    <div>
      <Header login={props.login} state={props.state} logout={props.logout} />
      <AboutUs />
      {/* <Team /> */}
      <Footer />
    </div>
  );
}

export default Index;
