import React, { Component } from 'react';

class Alignment extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Select Grade'};
    this.handleAlignmentChange = this.handleAlignmentChange.bind(this);
    
  }

  handleAlignmentChange(event) {
    this.setState({value: event.target.value});
  }

 

  render() {
    return (
      <form >
        <label>
          <select value={this.state.value} onChange={this.handleAlignmentChange}>
            <option value="Alignment Grade">Select Grade</option>
            <option value="Alignment Plus">Plus Grade</option>
            <option value="Alignment Minus">Minus Grade</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Alignment;