import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/theme';

const colors = {
  'Dark Grey': ['#424242', '#2C2A2A', '#3C3C3C', '#414141', '#373737'],
  'Black': ['#252525', '#202020', '#131313'],
  'White': ['#FFFFFF', '#EDEDED', '#F2F2F2', '#FAFAFA'],
  'Yellow': ['#F9ED32', '#FFF225'],
};

const ColorSelector = ({ onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
    onColorSelect(color);
  };

  return (
    <div className="color-selector">
      {Object.entries(colors).map(([colorName, colorValues]) => (
        <div key={colorName} className="color-group">
          <h3>{colorName}</h3>
          <div className="color-options">
            {colorValues.map((color) => (
              <div
                key={color}
                className={`color-swatch ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

ColorSelector.propTypes = {
  onColorSelect: PropTypes.func.isRequired,
};

export default ColorSelector;
