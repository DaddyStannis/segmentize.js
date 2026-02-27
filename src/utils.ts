import { DEFAULT_ANGLE, DEFAULT_DIMENSION } from "./constants";
import type { ICharOptions, Strategy } from "./IBoardOptions";
import type { Angle, Dimension } from "./types";

export function dim2str(dim: Dimension): string {
  return typeof dim === "string" ? dim : `${dim}${DEFAULT_DIMENSION}`;
}

export function ang2str(ang: Angle): string {
  return typeof ang === "string" ? ang : `${ang}${DEFAULT_ANGLE}`;
}

export function getPerfectChar(
  type: Strategy,
  multiplier = 1,
): Required<ICharOptions> {
  const isMatrix = type === "matrix";

  const perfectChar = {
    height: isMatrix ? 3.5 * multiplier : 4.0 * multiplier,
    width: isMatrix ? 2.5 * multiplier : 2.0 * multiplier,
    thickness: isMatrix ? 0.35 * multiplier : 0.4 * multiplier,
    gap: isMatrix ? 0.15 * multiplier : 0.1 * multiplier,
  };

  return perfectChar;
}
