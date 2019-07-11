import React from 'react';
import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import firebaseConfig from './../confFB'

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',password:''};

      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleChange(event,type) {
    if(type === "email")this.setState({email: event.target.value});
    if(type === "password")this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          email:
          <input type="text" value={this.state.email} onChange={(e) => {this.handleChange(e,'email')}} />
          Password:
          <input type="password" value={this.state.password} onChange={(e) => {this.handleChange(e,'password')}} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default CreateUser;
