import React, { Component } from 'react';

class Finish extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Select Grade'};
    this.handleFinishChange = this.handleFinishChange.bind(this);
    
  }

  handleFinishChange(event) {
    this.setState({value: event.target.value});
  }

 

  render() {
    return (
      <form >
        <label>
          <select value={this.state.value} onChange={this.handleFinishChange}>
            <option value="Finish Grade">Select Grade</option>
            <option value="Finish Plus">Plus Grade</option>
            <option value="Finish Minus">Minus Grade</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Finish;