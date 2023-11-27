const pluck = (array, key) => {
  try {
    const array_length = array.length;
    let start = 0;
    let end = array_length - 1;
    let mid;
    let mid1;
    const returnList = [];
    if (array_length === 0) {
      return [];
    } else if (array_length === 1) {
      if (array[start][key]) {
        return [array[start][key]];
      } else {
        return [];
      }
    }
    if (array_length % 2 === 0) {
      mid1 = array_length / 2;
      mid = mid1 - 1;
    } else {
      mid = (array_length - 1) / 2;
      mid1 = mid;
    }
    for (let i = 0; i < array_length - 1; i++) {
      if (array[start][key]) {
        returnList.push(array[start][key]);
      }
      if (array[mid][key] && start !== mid) {
        returnList.push(array[mid][key]);
      }
      if (array[mid1][key] && mid !== mid1) {
        returnList.push(array[mid1][key]);
      }
      if (array[end][key] && mid1 !== end) {
        returnList.push(array[end][key]);
      }
      start = start + 1;
      end = end - 1;
      mid = mid - 1;
      mid1 = mid1 + 1;
      if (start > mid || mid1 > end) {
        return returnList;
      }
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = pluck;
