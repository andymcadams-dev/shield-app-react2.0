import React from 'react';

function Assignment({assignment, handleAssignmentChange}) {
    return (
      <form >
        <label>
          <select value={assignment} onChange={handleAssignmentChange}>
            <option value=''>Select Grade</option>
            <option value="Assignment Plus">Plus Grade</option>
            <option value="Assignment Minus">Minus Grade</option>
          </select>
        </label>
      </form>
    );
  }


export default Assignment;