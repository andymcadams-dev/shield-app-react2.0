import React,{Component} from 'react';
import PBU from './PassBreakUpComponent';

class Sack extends Component {
    state = {
      sack:""
    };

    handleSackChange=(e)=>{
        this.setState({
          sack: e.target.value
        })
    }

  render() {
    return (
      <div>
         <form>
            <input type="radio" value="half" id="half"
              onChange={this.handleSackChange} name="sack" />
            <label for="half">Half Sack</label>

            <input type="radio" value="whole" id="whole"
              onChange={this.handleSackChange} name="sack"/>
            <label for="whole">Whole Sack</label>
         </form>
      </div>
    );
  }
}
export default PBU;