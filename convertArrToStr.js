const test1 = [17,21,23];
const test2 = [12,5,-5,0,4];
// print ...17oC in 1 days...21oC in 2 days...23oC in 3 days...



/* write function which takes in array called arr, then logs 'print ...17oC in 1 days...21oC in 2 days...23oC in 3 days...
' to the console*/

const printForecast = function(arr) {
  let str = '';
  for(let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}°C in ${i + 1} days`;
  }
  console.log(`${str}...`);
};

printForecast(test1);
printForecast(test2);