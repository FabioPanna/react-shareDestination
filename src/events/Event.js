import React from 'react';


class Event extends React.Component {
  
  
    componentDidMount() {

     
      }
      
  
    render() {
        let eventData = this.props.location.state;
      return (
        <div id="event">
            <h1>{eventData.title}</h1>
            <img src={eventData.image} alt={eventData.title}/>
            <h4>{eventData.description}</h4>
        </div>
        
      )
      
    }

  }
  
  export default Event;