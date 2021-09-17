import { useState } from "react";

export default function FumbleRecovery() {
const [isChecked, setIsChecked] = useState(false);

const handleFumbleRecoveryOnChange = () => {
  setIsChecked(!isChecked);
};

return (
  <div className="FumbleRecoverydiv">
      <div className="FumbleRecovery">
        <input
          type="checkbox"
          id="fumbleRecovery"
          name="fumbleRecovery"
          value="FumbleRecovery"
          checked={isChecked}
          onChange={handleFumbleRecoveryOnChange}
        />
        Fumble Recovery
    </div>
  </div>
)}