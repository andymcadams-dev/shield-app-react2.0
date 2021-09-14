import React, { useState } from 'react'
import { useForm } from "react-hook-form";

function GameSelect ({gameSelect, handleGameSelectChange}) {
  
  return (
    <div>
      <label>Game Select</label>
      <input type="text" value={gameSelect} onChange={handleGameSelectChange} />
    </div>
  )
}

  
export default GameSelect;