const four = require("four-pointer-iterate");
const _ = require("underscore");

const arr = [];
createArray = () => {
  for (let i = 0; i < 10000; i++) {
    arr.push(generateRandom());
  }
};

function generateRandom() {
  const randomFloat = Math.random();
  const min = 0;
  const max = 1000;
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInt;
}

createArray();
console.time("start _");
const filtered_array = _.filter(arr, (ele) => {
  return ele === 10;
});
console.timeLog("start _");
console.time("start four");
const filtered_array2 = four.filterArray(arr, 10);
console.timeLog("start four");
