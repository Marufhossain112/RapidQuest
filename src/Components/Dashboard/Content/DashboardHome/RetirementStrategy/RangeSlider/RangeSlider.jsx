import React, { useState } from 'react';
import "./RangleSlider.css" // Import your CSS file

const RangeSlider = () => {
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (event) => {
        const value = event.target.value;
        setSliderValue(value);
    };

    return (
        <div>
            <span>Employee Contribution</span>
            <input
                type="range"
                value={sliderValue}
                onChange={handleSliderChange}
                className="custom-slider"
            />
            <span className="slider-value">{sliderValue}%</span>
        </div>
    );
};

export default RangeSlider;
