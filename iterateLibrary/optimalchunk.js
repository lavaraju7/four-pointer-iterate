const optimalChunk = (array) => {
  try {
    const total_array_length = array.length;
    let optimal_length = 500;
    let final_length = 500;
    let chunks = 0;
    const finalArray = [];
    console.log(array.length);
    if (total_array_length <= 100) {
      chunks = 2;
    } else if (total_array_length > 100 && total_array_length <= 500) {
      chunks = 4;
    } else if (total_array_length > 500 && total_array_length <= 2500) {
      chunks = 5;
    }
    optimal_length = parseInt(total_array_length / chunks);
    final_length = parseInt(
      total_array_length / chunks + (total_array_length % optimal_length)
    );
    let start = 0;
    let end = optimal_length;
    for (let i = 0; i < chunks - 1; i += 1) {
      finalArray.push(array.slice(start, end));
      end = end + optimal_length;
      start += optimal_length;
    }
    finalArray.push(array.slice(start, end - optimal_length + final_length));
    return finalArray;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = optimalChunk;
