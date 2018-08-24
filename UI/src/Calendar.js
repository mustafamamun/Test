import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EventDetails from './Modals/EventDetails';
import CreateEvent from './Modals/CreateEvent';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);


export default class Calendar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showDetailsModel : false,
      showCreateModal : false,
      selectedEvent : {}
    }
    this.onSelectEvent = this.onSelectEvent.bind(this);
    this.hideCreateModal = this.hideCreateModal.bind(this);
    this.hideDetailsModal = this.hideDetailsModal.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleApply = this.handleApply.bind(this)
  }
  onSelectEvent(event, e){
    this.setState({showDetailsModel : true, eventDetails: event}) 
  }
  handleSelect(selection){
    this.setState({showCreateModal : true, selectedEvent : selection})
  }
  hideDetailsModal(){
    this.setState({showDetailsModel : false})
  }
  hideCreateModal(){
    this.setState({showCreateModal : false})
  }
  handleApply(value){
    this.setState({showCreateModal : false });
    this.props.handleApply({
      "title": value.title,
      "description": value.description,
      "place": value.place,
      "startTime": moment(this.state.selectedEvent.start).format('YYYY-MM-DDTHH:MM:SS'),
      "endTime": moment(this.state.selectedEvent.end).format('YYYY-MM-DDTHH:MM:SS')
    })
  }
  render() {
    const style = {
      height: '100vh',
    };
    return (
      <div {...{style}}>
        <BigCalendar
          selectable
          onSelectSlot={this.handleSelect}
          events={this.props.events}
          onSelectEvent={this.onSelectEvent}
          />
        <EventDetails 
            show={this.state.showDetailsModel}
            onHide={this.hideDetailsModal}
            eventDetails={this.state.eventDetails}
        />
        <CreateEvent 
          show={this.state.showCreateModal}
          onHide={this.hideCreateModal}
          selectedEvent = {this.state.selectedEvent}
          handleApply = {this.handleApply}
        />
      </div>
    );
  }
}
