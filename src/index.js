
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
    max_value = array[0];
    for (i = 1; i < array.length; ++i) {
        if (array[i] > max_value) {
            max_value = array[i];
        }
    }
    return max_value;
}

exports.avg = function avg (array) {
    var sum;
    for (i = 0; i < array.length; ++i) {
        sum = sum + array[i];
        }
        avg_value = sum / array.length;
    return avg_value;
}
