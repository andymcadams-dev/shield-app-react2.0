import React, { Component } from 'react';

class GameSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Select Grade'};
    this.handleGameSelectChange = this.handleGameSelectChange.bind(this);
    
  }

  handleGameSelectChange(event) {
    this.setState({value: event.target.value});
  }

 

  render() {
    return (
      <form >
        <label>
          <select value={this.state.value} onChange={this.handleGameSelectChange}>
            <option value="Select Game">Select Game</option>
            <option value="Cal Lutheran">Cal Lutheran</option>
            <option value="La Verne">La Vern</option>
            <option value="George Fox">George Fox</option>
            <option value="Lewis & Clark">Lewis & Clark</option>
            <option value="Whitworth">Whitworth</option>
            <option value="Linfield">Linfield</option>
            <option value="Willamette">Willamette</option>
            <option value="Puget Sound">Pugt Sound</option>
            <option value="Pacific">Pacific</option>
          </select>
        </label>
      </form>
    );
  }
}

export default GameSelect;