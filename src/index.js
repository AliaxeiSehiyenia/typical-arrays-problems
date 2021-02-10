
exports.min = function min (array) {
    if (array.length == 0) {
        return 0;
    }
    else if (array) {
        min_value = array[0];
    for (i = 1; i < array.length; ++i) {
        if (array[i] < min_value) {
            min_value = array[i];
        }
    }
    return min_value;
}
else return 0;
}

exports.max = function max (array) {
    if (array.length == 0) {
        return 0;
    }
    else if (array) {
    max_value = array[0];
    for (i = 1; i < array.length; ++i) {
        if (array[i] > max_value) {
            max_value = array[i];
        }
    }
    return max_value;
}
else return 0;
}

exports.avg = function avg (array) {
    if (array.length == 0) {
        return 0;
    }
    else if (array) {
    var sum = 0;
    var count = array.length;
    for (i = 0; i < count; i++) {
        sum += array[i];
        }
    return sum / count;
    }
    else return 0;
}
