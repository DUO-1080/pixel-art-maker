import React, { useState } from "react";
import useStyles from "./App.style";
import Grid from "./components/Grid";
import ColorPicker from "./components/ColorPicker";

function App() {
  const [currentColor, setCurrentColor] = useState("#56bc58");
  const [colorHistory, setColorHistory] = useState([]);
  const classes = useStyles();

  const handleColorSelect = (color) => {
    setColorHistory(colorHistory.slice(-10).concat(color));
    setCurrentColor(color);
  };

  return (
    <div className={classes.app}>
      <ColorPicker currentColor={currentColor} onColorSelect={handleColorSelect} />
      <Grid currentColor={currentColor} />
    </div>
  );
}

export default App;
