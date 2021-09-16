import { useState } from "react";

export default function ForcedFumble() {
const [isChecked, setIsChecked] = useState(false);

const handleForcedFumbleOnChange = () => {
  setIsChecked(!isChecked);
};

return (
  <div className="ForcedFumblediv">
      <div className="ForcedFumble">
        <input
          type="checkbox"
          id="forcedfumble"
          name="forcedfumble"
          value="ForcedFumble"
          checked={isChecked}
          onChange={handleForcedFumbleOnChange}
        />
        Forced Fumble
    </div>
  </div>
)}