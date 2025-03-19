export function areArraysEqual(firstArray, secondArray) {
  if (
    firstArray.length === secondArray.length &&
    firstArray.every((element, index) => element === secondArray[index])
  ) {
    return true;
  }
  return false;
}
