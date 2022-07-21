/**
 * @param {string} s
 * @return {number}
 */

/*
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/
const romanToInt = function (s) {
  let outputNumber = 0;

  let numberArray = s.split("");

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === "I" && numberArray[i + 1] === "V") {
      outputNumber += 4;
      i++;
    } else if (numberArray[i] === "I" && numberArray[i + 1] === "X") {
      outputNumber += 9;
      i++;
    } else if (numberArray[i] === "X" && numberArray[i + 1] === "L") {
      outputNumber += 40;
      i++;
    } else if (numberArray[i] === "X" && numberArray[i + 1] === "C") {
      outputNumber += 90;
      i++;
    } else if (numberArray[i] === "C" && numberArray[i + 1] === "D") {
      outputNumber += 400;
      i++;
    } else if (numberArray[i] === "C" && numberArray[i + 1] === "M") {
      outputNumber += 900;
      i++;
    } else {
      const obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
      };
      outputNumber += obj[numberArray[i]];
    }
  }
  return outputNumber;
};
