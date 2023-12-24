# Temperature Calculator

This JavaScript function, `calcTemp`, takes an array of temperatures as input and calculates the maximum and minimum temperatures. It's a basic utility to find the highest and lowest temperatures in a given dataset.

## Usage

To use this temperature calculator, simply call the `calcTemp` function and pass an array of temperatures as an argument. The function will then output the maximum and minimum temperatures to the console.

```javascript
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
