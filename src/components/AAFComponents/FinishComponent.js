import React from 'react';

function Finish({finish, handleFinishChange}) {
    return (
      <form >
        <label>
          <select value={finish} onChange={handleFinishChange}>
            <option value=''>Select Grade</option>
            <option value="Finish Plus">Plus Grade</option>
            <option value="Finish Minus">Minus Grade</option>
          </select>
        </label>
      </form>
    );
  }


export default Finish;