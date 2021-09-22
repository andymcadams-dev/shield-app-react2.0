import { useState } from "react";

export default function Tackle() {
const [isTackleChecked, setIsTackleChecked] = useState(false);

const handleTackleChange = () => {
  setIsTackleChecked(!isTackleChecked);
};

return (
  <div className="Tacklediv">
      <div className="Tackle">
        <input
          type="checkbox"
          id="tackle"
          name="tackle"
          value="Tackle"
          checked={isTackleChecked}
          onChange={handleTackleChange}
        />
    </div>
  </div>
)}