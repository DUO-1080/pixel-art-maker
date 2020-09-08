import { createUseStyles } from "react-jss";

export default createUseStyles({
  grid: {
    display: "grid",
    gridTemplateRows: "repeat(5, 1fr)",
    gridTemplateColumns: "repeat(8, 1fr)",
    width: "80vmin",
    height: "50vmin",
    border: "2px solid #000",
  },
  cell: {
    border: "2px solid #000",
    cursor: "pointer",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
});
