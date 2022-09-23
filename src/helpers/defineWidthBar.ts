import {
  MIN_WIDTH_CELL,
  MOBILE_SIZE,
  TABLE_SIZE,
  WIDTH_LINE_DESKTOP,
  WIDTH_LINE_MOBILE,
  WIDTH_LINE_TABLE,
} from 'constants/common';

export const defineWidthBar = (
  value: number,
  total: number,
  width: number,
): number => {
  if (width > TABLE_SIZE) {
    return value > MIN_WIDTH_CELL
      ? Math.floor(WIDTH_LINE_DESKTOP * (value / total))
      : MIN_WIDTH_CELL;
  }
  if (width < TABLE_SIZE && width > MOBILE_SIZE) {
    return value > MIN_WIDTH_CELL
      ? Math.floor(WIDTH_LINE_TABLE * (value / total))
      : MIN_WIDTH_CELL;
  }

  return value > MIN_WIDTH_CELL
    ? Math.floor(WIDTH_LINE_MOBILE * (value / total))
    : MIN_WIDTH_CELL;
};
