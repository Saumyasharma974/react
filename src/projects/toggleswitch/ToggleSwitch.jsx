import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <>
      <div 
        className="toggle-switch" 
        style={{ backgroundColor: isOn ? "#4caf50" : "#f44336" }} 
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <span className="switch-state">
            {isOn ? "ON" : "OFF"}
          </span>
        </div>
      </div>
    </>
  );
};
