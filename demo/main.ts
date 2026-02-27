import { SegmentBoard } from "../src";

const board = new SegmentBoard("#board-container1", {
  type: "matrix",
  text: "127.0.0.1:3000",
  skew: -10,
  colorOn: "#ff2a00",
  colorOff: "#632217",
  size: 1,
});

const board2 = new SegmentBoard("#board-container2", {
  type: "7-segment",
  text: "127.0.0.1:3000",
  skew: -10,
  colorOn: "#ff2a00",
  colorOff: "#632217",
  size: 1,
});
