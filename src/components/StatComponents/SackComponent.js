import { useState } from "react";

export default function Sack() {
const [isChecked, setIsChecked] = useState(false);

const handleSackOnChange = () => {
  setIsChecked(!isChecked);
};

return (
  <div className="Sackdiv">
      <div className="Sack">
        <input
          type="checkbox"
          id="sack"
          name="sack"
          value="Sack"
          checked={isChecked}
          onChange={handleSackOnChange}
        />
        Sack
    </div>
  </div>
)}