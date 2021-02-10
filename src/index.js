
exports.min = function min (array) {
    min = array[0];
    max = min;
    for (i = 1; i < array.length; ++i) {
        if (array[i] > max) max = array[i];
        if (array[i] < min) min = array[i];
    }
    return min;
}

exports.max = function max (array) {
    min = array[0];
    max = min;
    for (i = 1; i < array.length; ++i) {
        if (array[i] > max) max = array[i];
        if (array[i] < min) min = array[i];
    }
    return max;
}

exports.avg = function avg (array) {
  return 0;
}
