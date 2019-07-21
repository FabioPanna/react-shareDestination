import React from 'react';
import * as firebase from "firebase/app";
import 'firebase/firestore';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import firebaseConfig from './../confFB'

class ListEvents extends React.Component {
    constructor(props) {
      super(props);
      this.state = {events :[]};
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }
    }
  
    componentDidMount() {
        var db = firebase.firestore();
        var { events } = this.state;
        var _self = this;
        db.collection("eventi").get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              console.log(doc.id, " => ", doc.data());
              const obj = {
                'title': doc.data().title,
                'description': doc.data().description,
                'image': doc.data().image
              };
              
              events = [...events, obj]
              _self.setState({events});
          });
      });
     
      }
      
  
    render() {
      var eventsAvaible = this.state.events;
      return (
        <div id="pippo">
        <h1>lista eventi</h1>
          {eventsAvaible.map(item => (
          <div key={item.title}>
          <img src={item.image} alt={item.title}/>
          <p>
          <h3>{item.title}</h3>
          
          <Link to ={{
            pathname: "/Event", 
            state: { 
              title: item.title, 
              description: item.description, 
              image: item.image 
            }
          }} >
            <h4>{item.description}</h4>
        </Link>
          </p>
          
          
          </div>
          )
        )}
        </div>
        
      )
      
    }

  }
  
  export default ListEvents;