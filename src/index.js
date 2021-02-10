
exports.min = function min (array) {
    for (i = 0; i < array.length; ++i)
    if (array[i] < array[i + 1]) min = array[i];
    else max = array[i];  
    return min;
}

exports.max = function max (array) {
    for (i = 0; i < array.length; ++i)
    if (array[i] > array[i + 1]) max = array[i];
    else max = array[i];  
    return max;
}

exports.avg = function avg (array) {
  return 0;
}
