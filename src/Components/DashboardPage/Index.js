import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Dashboard from './MiniComponents/Dashboard';

function Index(props) {
  return (
    <div>
      <Header login={props.login} state={props.state} logout={props.logout} />
      <Dashboard
        login={props.login}
        state={props.state}
        logout={props.logout}
      />
      <Footer />
    </div>
  );
}

export default Index;
