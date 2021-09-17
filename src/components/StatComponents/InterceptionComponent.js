import { useState } from "react";

export default function Interception() {
const [isChecked, setIsChecked] = useState(false);

const handleInterceptionOnChange = () => {
  setIsChecked(!isChecked);
};

return (
  <div className="Interceptiondiv">
      <div className="Interception">
        <input
          type="checkbox"
          id="interception"
          name="interception"
          value="Interception"
          checked={isChecked}
          onChange={handleInterceptionOnChange}
        />
        Interception
    </div>
  </div>
)}