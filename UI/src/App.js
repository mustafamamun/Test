import React from 'react';
import Calendar from './Calendar';
import ApiService from './apiService';
import moment from 'moment'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    this.handleApply = this.handleApply.bind(this)
  }
  

  componentWillMount() {
    ApiService.getAllEvents()
    .then(results=>{
      this.setState({ events : results.map(result=>{
        return {
          id: '', 
          title: result.title, 
          description: result.description,
          allDay: false, 
          start: moment(result.startTime).toDate(), 
          end: moment(result.endTime).toDate(),
          place: result.place
        }
      })})
    });
  }
  handleApply(value){
    ApiService.createEvent(value)
      .then(result=>{
       this.setState({'events' : [ ...this.state.events, {
          d: '', 
          title: result.title, 
          description: result.description,
          allDay: false, 
          start: moment(result.startTime).toDate(), 
          end: moment(result.endTime).toDate(),
          place: result.place
       }]})
      })
    
  }
  render() {
    const {
      events
    } = this.state;
    return (
       <React.Fragment>
          <Calendar 
            events = {events} 
            handleSelect = {this.handleSelect}
            onSelectEvent = {this.handleSelectEvent} 
            handleApply = {this.handleApply}
          />
        </React.Fragment>
    );
  }
}

export default App;
