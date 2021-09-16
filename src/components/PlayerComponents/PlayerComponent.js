import React from 'react'


function PlayerSelect ({playerSelect, handlePlayerSelectChange}) {
  
  return (
    <div>
      <label>Player Select</label>
      <input type="text" value={playerSelect} onChange={handlePlayerSelectChange} />
    </div>
  )
}

  
export default PlayerSelect;