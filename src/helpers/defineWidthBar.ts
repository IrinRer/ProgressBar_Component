import { MIN_WIDTH_CELL, WIDTH_LINE_DESKTOP } from 'constants/common';

export const defineWidthBar = (value: number, total: number): number => {
  return value > MIN_WIDTH_CELL
    ? Math.floor(WIDTH_LINE_DESKTOP * (value / total))
    : MIN_WIDTH_CELL;
};
