import { useState } from "react";

export default function FumbleRecovery() {
const [isFumRecChecked, setIsFumRecChecked] = useState(false);
const [fumbleYards, setFumbleYards] = useState('Enter Yards Here');
const handleFumbleRecoveryOnChange = () => {
  setIsFumRecChecked(!isFumRecChecked);
};
const handleFumbleYardsChange = e => {
  setFumbleYards(e.target.value)
}

return (
  <div className="FumbleRecoverydiv">
      <div className="FumbleRecovery">
        <input
          type="checkbox"
          id="fumbleRecovery"
          name="fumbleRecovery"
          value="FumbleRecovery"
          checked={isFumRecChecked}
          onChange={handleFumbleRecoveryOnChange}
        />
        
    </div>
    {isFumRecChecked &&  <div className="FumbleYards"> 
      <input
        type="text"
        id="FumbleYards"
        name="FumbleYards"
        value={fumbleYards}
        onChange={handleFumbleYardsChange}
        />
      
    </div>}
  </div>
)}