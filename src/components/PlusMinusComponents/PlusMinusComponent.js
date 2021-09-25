import React from 'react'


function PlusMinus ({plusMinus, handlePlusMinusChange}) {
  
  return (
    <div>
      <label></label>
      <input type="text" value={plusMinus} onChange={handlePlusMinusChange} />
    </div>
  )
}

  
export default PlusMinus;