import React from 'react'


function PositionGroupSelect ({positionGroupSelect, handlePositionGroupSelectChange}) {
  
  return (
    <div>
      <label>Position Group</label>
      <input type="text" value={positionGroupSelect} onChange={handlePositionGroupSelectChange} />
    </div>
  )
}

  
export default PositionGroupSelect;