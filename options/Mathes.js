export function isFloat(value) {
  return typeof value === 'number' &&
    !Number.isNaN(value) &&
    !Number.isInteger(value);
}

export function arrayToString(array) {
  return array.toString().split(",").join("");
}