import React from 'react'


function PlusMinus ({plusMinus, handlePlusMinusChange}) {
  
  return (
    <div>
      <label>Play Grade</label>
      <input type="text" value={plusMinus} onChange={handlePlusMinusChange} />
    </div>
  )
}

  
export default PlusMinus;