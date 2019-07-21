import React from 'react';
import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebaseConfig from './../confFB'

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '../ListEvents',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',password:''};

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
   }
  }


  render() {
    return (
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    );
    
  }
}

export default CreateUser;
