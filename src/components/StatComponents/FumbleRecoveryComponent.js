class FumbleRecovery extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleFumbleRecoveryChange = this.handleFumbleRecoveryChange.bind(this);
      
    }
  
    handleFumbleRecoveryChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
          <form onSubmit={this.handleFumbleRecoverySubmit}>
            <select value={this.state.value} onChange={this.handleFumbleRecoveryChange} >
                <option value="Select...">Select...</option>
                <option value="1">1</option>
            </select>
        </form>
      );
    }
  }
  
export default FumbleRecovery;