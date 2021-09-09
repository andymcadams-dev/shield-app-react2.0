class ForcedFumble extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleForcedFumbleChange = this.handleForcedFumbleChange.bind(this);
      this.handlePosGroupSubmit = this.handlePosGroupSubmit.bind(this);
    }
  
    handleForcedFumbleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
          <form onSubmit={this.handleForcedFumbleSubmit}>
            <select value={this.state.value} onChange={this.handlePosGroupChange} >
                <option value="Select...">Select...</option>
                <option value="Interior Line">Interior Line</option>
                <option value="Defensive Ends">Defensive Ends</option>
                <option value="Linebackers">Linebackers</option>
                <option value="Cornerbacks">Cornerbacks</option>
                <option value="Safeties">Safeties</option>
            </select>
        </form>
      );
    }
  }
  
export default PositionGroup;