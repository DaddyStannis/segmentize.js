import { SegmentBoard } from "../src";

const board = new SegmentBoard("#board-container", {
  text: "808.",
  skew: "-10deg",
  glow: true,
  colorOn: "#ff2a00",
  colorOff: "#632217",
  gap: "8px",
  char: {
    width: "2rem",
    height: "4rem",
    thickness: "4px",
    gap: "4px",
  },
});

// Check dynamic update after 2 seconds
// setTimeout(() => {
//   board.setText(" 404");
// }, 2000);
