/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  // Create array of arrays to sort letters into
  let arraySort = [];
  for (let j = 0; j < numRows; j++) {
    arraySort[j] = [];
  }
  // String to array for easy iteration
  let stringToArray = s.split("");

  while (stringToArray.length > 0) {
    for (let i = 0; i < numRows; i++) {
      let letter = stringToArray.shift();
      if (letter) {
        arraySort[i].push(letter);
      }
    }
    for (let k = numRows - 2; k >= 1; k--) {
      let letter = stringToArray.shift();
      if (letter) {
        arraySort[k].push(letter);
      }
    }
  }
  let final = arraySort.toString().replaceAll(",", "");
  return final;
};
