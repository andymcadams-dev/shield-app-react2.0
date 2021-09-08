class PositionGroup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handlePosGroupChange = this.handlePosGroupChange.bind(this);
      this.handlePosGroupSubmit = this.handlePosGroupSubmit.bind(this);
    }
  
    handlePosGroupChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
          <form onSubmit={this.handlePosGroupSubmit}>
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