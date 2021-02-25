exports.min = function min(arrays) {
  if (arrays == 0 || arrays == null) {
    return 0;
  } else {
    let min_value = arrays[0];
    for (array of arrays) {
      if (array < min_value) {
        min_value = array;
      }
    }
    return min_value;
  }
};

exports.max = function max(arrays) {
  if (arrays == 0 || arrays == null) {
    return 0;
  } else {
    let max_value = arrays[0];
    for (array of arrays) {
      if (array > max_value) {
        max_value = array;
      }
    }
    return max_value;
  }
};

exports.avg = function avg(arrays) {
  if (arrays == 0 || arrays == null) {
    return 0;
  } else {
    let sum = 0;
    for (array of arrays) {
      sum += array;
    }
    return sum / arrays.length;
  }
};
