import React from 'react';
import AboutUs from './MiniComponents/AboutUs';
import Team from './MiniComponents/Team';
import Header from '../Header';
import Footer from '../Footer';

function Index() {
  return (
    <div>
      <Header />
      <AboutUs />
      {/* <Team /> */}
      <Footer />
    </div>
  );
}

export default Index;
