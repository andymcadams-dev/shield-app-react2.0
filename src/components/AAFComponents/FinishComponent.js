import React from 'react'


function FinishGrade ({finishGrade, handleFinishGradeChange}) {
  
  return (
    <div>
      <label>Finish Grade</label>
      <input type="text" value={finishGrade} onChange={handleFinishGradeChange} />
    </div>
  )
}

  
export default FinishGrade;