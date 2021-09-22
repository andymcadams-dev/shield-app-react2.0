import { useState } from "react";

export default function PBU() {
const [isChecked, setIsPBUChecked] = useState(false);

const handlePBUChange = () => {
  setIsPBUChecked(!isChecked);
};

return (
  <div className="PBUdiv">
      <div className="PBU">
        <input
          type="checkbox"
          id="pbu"
          name="pbu"
          value="PBU"
          checked={isChecked}
          onChange={handlePBUChange}
        />
        
    </div>
  </div>
)}