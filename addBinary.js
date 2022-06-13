const addBinary = function (a, b) {
  let sum = 0;

  const binaryToNum = (string) => {
    const array = string.split("").reverse();

    for (let i = 0; i < array.length; i++) {
      let add = Math.pow(2, i);
      if (array[i] > 0) {
        sum += add;
      }
    }
  };
  binaryToNum(a);
  binaryToNum(b);
  console.log(sum);
  return sum.toString(2);
};
