import React, { Component } from 'react';

class PositionGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Select Grade'};
    this.handlePositionGroupChange = this.handlePositionGroupChange.bind(this);
    
  }

  handlePositionGroupChange(event) {
    this.setState({value: event.target.value});
  }

 

  render() {
    return (
      <form >
        <label>
          <select value={this.state.value} onChange={this.handlePositionGroupChange}>
            <option value="Select Position">Select Position Group</option>
            <option value="Interior Line">Interior Line</option>
            <option value="Defensive Ends">Defensive Ends</option>
            <option value="Linebackers">Linebackers</option>
            <option value="Safeties">Safeties</option>
            <option value="Cornerbacks">Cornerbacks</option>
          </select>
        </label>
      </form>
    );
  }
}

export default PositionGroup;