import { SegmentBoard } from "../src";

const board = new SegmentBoard("#board-container", {
  text: "127.0.0.1",
  skew: "-10deg",
  glow: true,
  colorOn: "#ff2a00",
  colorOff: "#632217",
  gap: 1,
  char: {
    width: 2,
    height: 4,
    thickness: 0.3,
    gap: 0.15,
  },
});

// Check dynamic update after 2 seconds
setTimeout(() => {
  board.setText("404");
}, 2000);
