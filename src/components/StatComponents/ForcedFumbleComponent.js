import { useState } from "react";

export default function ForcedFumble() {
const [isForcedFumbleChecked, setIsForcedFumbleChecked] = useState(false);
const handleForcedFumbleChange = () => {
  setIsForcedFumbleChecked(!isForcedFumbleChecked);
};

return (
  <div className="ForcedFumblediv">
      <div className="ForcedFumble">
        <input
          type="checkbox"
          id="forcedfumble"
          name="forcedfumble"
          value="ForcedFumble"
          checked={isForcedFumbleChecked}
          onChange={handleForcedFumbleChange}
        />
        
    </div>
  </div>
)}