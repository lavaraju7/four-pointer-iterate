const optimalChunk = (array) => {
  try {
    const total_array_length = array.length
    let optimal_length = 500
    let final_length = 500
    let chunks = 0
    const finalArray = []
    console.log(array.length)
    if (total_array_length <= 100) {
      chunks = 2
    } else if (total_array_length > 100 && total_array_length <= 500) {
      chunks = 4
    } else if (total_array_length > 500 && total_array_length <= 2500) {
      chunks = 5
    }
    optimal_length = parseInt(total_array_length / chunks)
    final_length = parseInt(
      total_array_length / chunks + (total_array_length % optimal_length)
    )
    let start = 0
    let end = optimal_length
    for (let i = 0; i < chunks - 1; i += 1) {
      finalArray.push(array.slice(start, end))
      end = end + optimal_length
      start += optimal_length
    }
    finalArray.push(array.slice(start, end - optimal_length + final_length))
    return finalArray
  } catch (err) {
    console.log(err)
    return err
  }
}

const filterArray = (array, predicate) => {
  try {
    const array_length = array.length
    let start = 0
    let end = array_length - 1
    let mid
    let mid1
    const returnList = []
    if (!array_length) {
      return []
    } else if (array_length === 1) {
      if (array[start] === predicate) {
        return array
      } else {
        return []
      }
    }
    if (array_length % 2 === 0) {
      mid1 = array_length / 2
      mid = mid1 - 1
    } else {
      mid = (array_length - 1) / 2
      mid1 = mid
    }
    for (let i = 0; i < array_length - 1; i++) {
      if (array[start] === predicate) {
        returnList.push(array[start])
      }
      if (array[mid] === predicate && start !== mid) {
        returnList.push(array[mid])
      }
      if (array[mid1] === predicate && mid !== mid1) {
        returnList.push(array[mid1])
      }
      if (array[end] === predicate && mid1 !== end) {
        returnList.push(array[end])
      }
      start = start + 1
      end = end - 1
      mid = mid - 1
      mid1 = mid1 + 1
      if (start > mid || mid1 > end) {
        return returnList
      }
    }
  } catch (err) {
    console.log(err)
    return err
  }
}

const filterArrayIndex = (array, predicate) => {
  try {
    const array_length = array.length
    let start = 0
    let end = array_length - 1
    let mid
    let mid1
    const returnList = []
    if (array_length === 0) {
      return []
    } else if (array_length === 1) {
      if (array[start] === predicate) {
        return [array[start]]
      } else {
        return []
      }
    }
    if (array_length % 2 === 0) {
      mid1 = array_length / 2
      mid = mid1 - 1
    } else {
      mid = (array_length - 1) / 2
      mid1 = mid
    }
    for (let i = 0; i < array_length - 1; i++) {
      if (array[start] === predicate) {
        returnList.push(start)
      }
      if (array[mid] === predicate && start !== mid) {
        returnList.push(mid)
      }
      if (array[mid1] === predicate && mid !== mid1) {
        returnList.push(mid1)
      }
      if (array[end] === predicate && mid1 !== end) {
        returnList.push(end)
      }
      start = start + 1
      end = end - 1
      mid = mid - 1
      mid1 = mid1 + 1
      if (start > mid || mid1 > end) {
        return returnList
      }
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}

const filterArrayWithProperty = (array, property, predicate) => {
  try {
    const array_length = array.length
    let start = 0
    let end = array_length - 1
    let mid
    let mid1
    const returnList = []
    if (array_length === 0) {
      return []
    } else if (array_length === 1) {
      if (array[start][property] === predicate) {
        return [array[start]]
      } else {
        return []
      }
    }
    if (array_length % 2 === 0) {
      mid1 = array_length / 2
      mid = mid1 - 1
    } else {
      mid = (array_length - 1) / 2
      mid1 = mid
    }
    for (let i = 0; i < array_length - 1; i++) {
      if (array[start][property] === predicate) {
        returnList.push(array[start])
      }
      if (array[mid][property] === predicate && start !== mid) {
        returnList.push(array[mid])
      }
      if (array[mid1][property] === predicate && mid !== mid1) {
        returnList.push(array[mid1])
      }
      if (array[end][property] === predicate && mid1 !== end) {
        returnList.push(array[end])
      }
      start = start + 1
      end = end - 1
      mid = mid - 1
      mid1 = mid1 + 1
      if (start > mid || mid1 > end) {
        return returnList
      }
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}

module.exports = {
  optimalChunk,
  filterArray,
  filterArrayIndex,
  filterArrayWithProperty
}
