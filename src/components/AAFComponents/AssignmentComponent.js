import React, { Component } from 'react';

class Assignment extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Select Grade'};
    this.handleAssignmentChange = this.handleAssignmentChange.bind(this);
    
  }

  handleAssignmentChange(event) {
    this.setState({value: event.target.value});
  }

 

  render() {
    return (
      <form >
        <label>
          <select value={this.state.value} onChange={this.handleAssignmentChange}>
            <option value="Assignment Grade">Select Grade</option>
            <option value="Assignment Plus">Plus Grade</option>
            <option value="Assignment Minus">Minus Grade</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Assignment;