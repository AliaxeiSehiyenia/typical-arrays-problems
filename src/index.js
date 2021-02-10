
exports.min = function min (array) {
    min_value = array[0];
    for (i = 1; i < array.length; ++i) {
        if (array[i] < min_value) {
            min_value = array[i];
        }
    }
    return min_value;
}

exports.max = function max (array) {
    return 0;
}

exports.avg = function avg (array) {
  return 0;
}
