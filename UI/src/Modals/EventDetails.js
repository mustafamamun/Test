import React from 'react';
import { Modal, ControlLabel } from 'react-bootstrap';
import {get} from 'lodash';
import * as moment from 'moment';

export default class EventDetails extends React.Component {
  render() {
    const { eventDetails } = this.props;
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title componentClass="h2">
                    <span>Event Name : {get(eventDetails, 'title', '')}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            {get(eventDetails, 'description') && <p><ControlLabel>Description : {get(eventDetails, 'description')}</ControlLabel></p>}
            <p><ControlLabel>Event starts : {moment(get(eventDetails, 'start')).format('MMMM Do YYYY, h:mm:ss a')}</ControlLabel></p>
            <ControlLabel>Event ends: {moment(get(eventDetails, 'end')).format('MMMM Do YYYY, h:mm:ss a')}</ControlLabel>
            {get(eventDetails, 'place') && <p><ControlLabel>Place: {get(eventDetails, 'place')}</ControlLabel></p>}
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
      </Modal>
    );
  }
}

