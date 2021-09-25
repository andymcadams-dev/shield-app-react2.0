import React, { useState, value } from 'react';

export default function Sack() {
    const [isSackSelected, setIsSackSelected] = useState(false);
    const [sackYards, setSackYards] = useState('Enter Yards Here');
    const handleSackChange = () => {
      setIsSackSelected(value!=="Select Sack");
    };
    
    const handleSackYardsChange = e => {
      setSackYards(e.target.value)
    }

    return (
      <div className="container">
        <div className="sack select">
          <form >
            <label>
              <select onChange={handleSackChange}>
                <option value="Select Sack">Select Sack</option>
                <option value="Half Sack">Half Sack</option>
                <option value="Whole Sack">Whole Sack</option>
              </select>
            </label>
          </form>
        </div>
        {isSackSelected  &&  <div className="SackYards"> 
          <input
            type="text"
            id="SackYards"
            name="SackYards"
            value={sackYards}
            onChange={handleSackYardsChange}
            />
        </div>}
      </div>
    );
  }


