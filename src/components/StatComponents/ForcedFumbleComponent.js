import React, { Component } from 'react';


const items = [
  'ForcedFumble',
];

class ForFum extends Component {
  componentWillMount = () => {
    this.selectedForcedFumbleCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedForcedFumbleCheckboxes.has(label)) {
      this.selectedForcedFumbleCheckboxes.delete(label);
    } else {
      this.selectedForFumCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedForFumCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <input
            label={label}
            handleForFumCheckboxChange={this.toggleForFumCheckbox}
            key={label}
        />
  )

  createForFumCheckboxes = () => (
    items.map(this.createForFumCheckbox)
  )

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              {this.createForFumCheckboxes()}
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default ForFum;