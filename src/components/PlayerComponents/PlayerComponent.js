import React from 'react'


function PlayerSelect ({playerSelect, handlePlayerSelectChange}) {
  
  return (
    <div>
      <label></label>
      <input type="text" value={playerSelect} onChange={handlePlayerSelectChange} />
    </div>
  )
}

  
export default PlayerSelect;