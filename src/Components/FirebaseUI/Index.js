import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../Firebase';
import Header from '../Header';
import Footer from '../Footer';

function Index(props) {
  return (
    <div>
      <Header login={props.login} state={props.state} logout={props.logout} />
      <StyledFirebaseAuth
        uiConfig={props.uiConfig}
        firebaseAuth={firebase.auth()}
      />
      <Footer />
    </div>
  );
}

export default Index;
