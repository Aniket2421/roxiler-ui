import React, { useState } from "react";
import { ChromePicker } from "react-color";
import "./ApplianceItem.css";

const ApplianceItem = ({ appliance }) => {
  const [isOn, setIsOn] = useState(false);
  const [fanSpeed, setFanSpeed] = useState(1);
  const [temperature, setTemperature] = useState(24);
  const [brightness, setBrightness] = useState(50);
  const [color, setColor] = useState("#ffffff"); // Default white color
  const [tempColor, setTempColor] = useState("#ffffff"); // Temporary color before applying
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showApplyButton, setShowApplyButton] = useState(false);

  const handleColorChange = (newColor) => {
    setTempColor(newColor.hex);
    setShowApplyButton(true); // Show the apply button when a new color is picked
  };

  const handleApplyColor = () => {
    setColor(tempColor);
    setShowApplyButton(false); // Hide the apply button after applying the color
  };

  const renderControls = () => {
    switch (appliance.name) {
      case "Fan":
        return (
          <div className="control-group">
            <label>Fan Speed: {fanSpeed}</label>
            <input
              type="range"
              min="1"
              max="5"
              value={fanSpeed}
              onChange={(e) => setFanSpeed(e.target.value)}
            />
          </div>
        );
      case "Air Conditioner":
        return (
          <div className="control-group">
            <label>Temperature: {temperature}°C</label>
            <input
              type="range"
              min="16"
              max="30"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>
        );
      case "Lights":
        return (
          <div className="control-group">
            <label>Brightness: {brightness}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
            />
            <button
              className="color-button"
              onClick={() => setShowColorPicker(!showColorPicker)}
            >
              Change Color
            </button>
            {showColorPicker && (
              <div className="color-picker">
                <ChromePicker color={tempColor} onChange={handleColorChange} />
                {showApplyButton && (
                  <button className="apply-button" onClick={handleApplyColor}>
                    Apply Color
                  </button>
                )}
              </div>
            )}
            <div
              className="light-preview"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="appliance-item">
      <div className="appliance-header">
        <h2>{appliance.name}</h2>
        <label className="switch">
          <input
            type="checkbox"
            checked={isOn}
            onChange={() => setIsOn(!isOn)}
          />
          <span className="slider"></span>
        </label>
      </div>
      {isOn && renderControls()}
    </div>
  );
};

export default ApplianceItem;
