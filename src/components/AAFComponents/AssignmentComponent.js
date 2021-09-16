import React from 'react'


function AssignmentGrade ({assignmentGrade, handleAssignmentGradeChange}) {
  
  return (
    <div>
      <label>Assignment Grade</label>
      <input type="text" value={assignmentGrade} onChange={handleAssignmentGradeChange} />
    </div>
  )
}

  
export default AssignmentGrade;