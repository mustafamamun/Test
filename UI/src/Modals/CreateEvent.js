import React from 'react';
import { Modal, ControlLabel, FormControl, Button} from 'react-bootstrap';
import moment from 'moment';

export default class CreateEvent extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        title: '',
        description: '',
        place: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleApply = this.handleApply.bind(this)
  }
  handleApply(){
      this.setState({
        title: '',
        description: '',
        place: ''
      });
    this.props.handleApply(this.state)
  }
  handleChange(e){
    this.setState({ [e.target.name] : e.target.value });
  }
  render() {
    const { selectedEvent } = this.props;
    
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title componentClass="h2">
                Create new event
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <form>
                <ControlLabel>Title</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.title}
                    placeholder="Enter text"
                    onChange={this.handleChange}
                    name="title"
                />
                <ControlLabel>Description</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.description}
                    placeholder="Enter text"
                    onChange={this.handleChange}
                    name="description"
                />
                <ControlLabel>Place</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.place}
                    placeholder="Enter text"
                    onChange={this.handleChange}
                    name="place"
                />
                <ControlLabel>Starts at</ControlLabel>
                <FormControl.Static>
                    {moment(selectedEvent.start).format('MMMM Do YYYY, h:mm:ss a')}
                </FormControl.Static>
                <ControlLabel>Ends at</ControlLabel>
                <FormControl.Static>
                    {moment(selectedEvent.end).format('MMMM Do YYYY, h:mm:ss a')}
                </FormControl.Static>
            </form>
          </Modal.Body>
          <Modal.Footer>
              <Button disabled = {this.state.title === ''}onClick={this.handleApply}>Apply</Button>
          </Modal.Footer>
      </Modal>
    );
  }
}

