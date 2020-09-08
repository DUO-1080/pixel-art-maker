import React from "react";
import useStyles from "./ColorPicker.style";

const ColorPicker = ({ currentColor, onColorSelect }) => {
  const classes = useStyles();

  const handleColorChange = (e) => {
    console.log(e.target.value);
    onColorSelect(e.target.value);
  };

  return <input className={classes.colorPicker} value={currentColor} onChange={handleColorChange} type="color" />;
};

export default ColorPicker;
