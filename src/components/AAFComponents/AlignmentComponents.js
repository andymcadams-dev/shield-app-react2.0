import React  from 'react'

const AlignmentPlusRadio = ({label, id, form, name, handleAlignmentPlusChange}) => {
    
    return (
        <div>
        <label>Plus</label>
        <input  
          type="radio" 
          id={id}
          name={name}
          onChange={handleAlignmentPlusChange}
          value={id}
          checked={form[name] === id}       
          />
          <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default AlignmentPlusRadio;