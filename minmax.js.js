// find the min & max value's in an array

const calcTemp = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    const currArr = temp[i];
    if (currArr > max) max = currArr;
    if (currArr < min) min = currArr;
  }
  console.log('max', max);
  console.log('min', min);
};
calcTemp([1, 5, 10]);