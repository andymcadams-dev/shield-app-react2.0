import React, { Component } from 'react';
import PBU from './Checkbox';

const items = [
  'PBU',
];

class PBU extends Component {
  componentWillMount = () => {
    this.selectedPBUCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedPBUCheckboxes.has(label)) {
      this.selectedPBUCheckboxes.delete(label);
    } else {
      this.selectedPBUCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedPBUCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <Checkbox
            label={label}
            handlePBUCheckboxChange={this.togglePBUCheckbox}
            key={label}
        />
  )

  createPBUCheckboxes = () => (
    items.map(this.createPBUCheckbox)
  )

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              {this.createPBUCheckboxes()}
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default PBU;