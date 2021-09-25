import React from 'react';

function Alignment({alignment, handleAlignmentChange}) {
    return (
      <form >
        <label>
          <select value={alignment} onChange={handleAlignmentChange}>
            <option value=''>Select Grade</option>
            <option value="Alignment Plus">Plus Grade</option>
            <option value="Alignment Minus">Minus Grade</option>
          </select>
        </label>
      </form>
    );
  }


export default Alignment;