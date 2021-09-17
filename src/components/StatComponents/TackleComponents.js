import { useState } from "react";

export default function Tackle() {
const [isChecked, setIsChecked] = useState(false);

const handleTackleOnChange = () => {
  setIsChecked(!isChecked);
};

return (
  <div className="Tacklediv">
      <div className="Tackle">
        <input
          type="checkbox"
          id="tackle"
          name="tackle"
          value="Tackle"
          checked={isChecked}
          onChange={handleTackleOnChange}
        />
        Tackle
    </div>
  </div>
)}