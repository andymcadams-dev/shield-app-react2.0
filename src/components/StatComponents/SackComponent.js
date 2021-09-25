import React, { useState } from 'react';

export default function Sack() {
    const [selectedSack, setSelectedSack] = useState('');
    const [sackYards, setSackYards] = useState('Enter Yards Here');
    const handleSackChange = e => {
      setSelectedSack(e.target.value);
    };
    
    const handleSackYardsChange = e => {
      setSackYards(e.target.value)
    }

    return (
      <div className="container">
        <div className="sack select">
          <form >
            <label>
              <select value={selectedSack} onChange={handleSackChange}>
                <option value=''>Select Sack</option>
                <option value="Half Sack">Half Sack</option>
                <option value="Whole Sack">Whole Sack</option>
              </select>
            </label>
          </form>
        </div>
        {selectedSack  && <div className="SackYards"> 
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


