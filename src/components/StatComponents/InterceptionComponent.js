import React, { useState } from "react";

export default function Interception() {
const [isINTChecked, setIsINTChecked] = useState(false);
const [interceptionYards, setInterceptionYards] = useState('Enter Yards Here');
const handleInterceptionChange = () => {
  setIsINTChecked(!isINTChecked);
};

const handleInterceptionYardsChange = e => {
  setInterceptionYards(e.target.value)
}

return (
  <div className="Interceptiondiv">
      <div className="Interception">
        <input
          type="checkbox"
          id="interception"
          name="interception"
          value="Interception"
          checked={isINTChecked}
          onChange={handleInterceptionChange}
        />
    </div>
    {isINTChecked &&  <div className="InterceptionYards"> 
      <input
        type="text"
        id="InterceptionYards"
        name="InterceptionYards"
        value={interceptionYards}
        onChange={handleInterceptionYardsChange}
        />
      
    </div>}
  </div>
)}