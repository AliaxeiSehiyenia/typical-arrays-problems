
exports.min = function min (array) {
    if (array.length == 0) {
        return 0;
    }
    else {
        min_value = array[0];
    for (i = 1; i < array.length; ++i) {
        if (array[i] < min_value) {
            min_value = array[i];
        }
    }
    return min_value;
}
}

exports.max = function max (array) {
    if (array.length == 0) {
        return 0;
    }
    else {
    max_value = array[0];
    for (i = 1; i < array.length; ++i) {
        if (array[i] > max_value) {
            max_value = array[i];
        }
    }
    return max_value;
}
}

exports.avg = function avg (array) {
    if (array.length == 0) {
        return 0;
    }
    else {
    var sum = 0;
    var count = array.length;
    for (i = 0; i < count; i++) {
        sum += array[i];
        }
    return sum / count;
    }
}
