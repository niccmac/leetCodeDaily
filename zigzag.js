/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows > s.length) {
    return s;
  }
  // Create array of arrays to sort letters into
  let arraySort = [];
  for (let j = 0; j < numRows; j++) {
    arraySort[j] = [];
  }
  // String to array for easy iteration
  let stringToArray = s.split("");
  // console.log(stringToArray)

  while (stringToArray.length > 0) {
    for (let i = 0; i < numRows; i++) {
      let letter = stringToArray.shift();

      if (letter) {
        console.log(letter);
        arraySort[i].push(letter);
      }
    }
    for (let k = numRows - 2; k >= 1; k--) {
      let letter = stringToArray.shift();

      if (letter) {
        console.log(letter);
        arraySort[k].push(letter);
      }
    }
  }

  let final = arraySort.toString();

  let finalCommaFree = "";
  for (let f = 0; f < final.length; f++) {
    if (f % 2 === 0) {
      finalCommaFree += final[f];
    }
  }
  return finalCommaFree;
};
