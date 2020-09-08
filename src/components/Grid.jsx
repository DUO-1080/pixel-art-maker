import React, { useState } from "react";

import useStyles from "./Grid.style.js";

const offCellState = {
  on: false,
  color: "#ffffff",
};
const initCells = Array.from({ length: 40 }, () => offCellState);

const Grid = ({ currentColor }) => {
  const [cells, setCells] = useState(initCells);
  const classes = useStyles();

  const handleCellClick = (i) => (e) => {
    e.preventDefault();
    console.log(e.buttons);
    if (e.buttons === 1 || e.buttons === 2) {
      setCells(
        cells.map((cell, index) => {
          if (index === i) {
            if (e.buttons === 1) {
              return {
                on: true,
                color: currentColor,
              };
            }
            return {
              on: false,
            };
          }
          return cell;
        })
      );
    }
  };
  console.log(cells);
  return (
    <div className={classes.grid}>
      {cells.map((cell, index) => (
        <div
          key={index}
          style={{ background: cell.on ? cell.color : "#ffffff" }}
          className={classes.cell}
          onMouseOver={handleCellClick(index)}
          onMouseDown={handleCellClick(index)}
          onContextMenu={(e) => e.preventDefault()}></div>
      ))}
    </div>
  );
};

export default Grid;
