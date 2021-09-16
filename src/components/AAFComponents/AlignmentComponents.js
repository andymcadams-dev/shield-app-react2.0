import React from 'react'


function AlignmentGrade ({alignmentGrade, handleAlignmentGradeChange}) {
  
  return (
    <div>
      <label>Alignment Grade</label>
      <input type="text" value={alignmentGrade} onChange={handleAlignmentGradeChange} />
    </div>
  )
}

  
export default AlignmentGrade;