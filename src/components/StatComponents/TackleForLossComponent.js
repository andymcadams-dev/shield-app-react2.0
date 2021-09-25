import { useState } from "react";

export default function TackleForLoss() {
const [isTackleForLossChecked, setIsTackleForLossChecked] = useState(false);
const [tackleForLossYards, setTackleForLossYards] = useState('Enter Yards Here');
const handleTackleForLossChange = () => {
  setIsTackleForLossChecked(!isTackleForLossChecked);
};

const handleTackleForLossYardsChange = e => {
  setTackleForLossYards(e.target.value)
}
return (
  <div className="TackleForLossdiv">
      <div className="TackleForLoss">
        <input
          type="checkbox"
          id="tackleforloss"
          name="tackleforloss"
          value="TackleForLoss"
          checked={isTackleForLossChecked}
          onChange={handleTackleForLossChange}
        />
    </div>
    {isTackleForLossChecked &&  <div className="TackleForLossYards"> 
      <input
        type="text"
        id="TackleForLossYards"
        name="TackleForLossYards"
        value={tackleForLossYards}
        onChange={handleTackleForLossYardsChange}
        />
    </div>}
  </div>
)}