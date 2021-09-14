import { useState } from "react";

export default function PBU() {
const [isChecked, setIsChecked] = useState(false);

const handlePBUOnChange = () => {
  setIsChecked(!isChecked);
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
          onChange={handlePBUOnChange}
        />
        PBU
    </div>
  </div>
)}