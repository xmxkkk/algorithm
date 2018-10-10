var quick_sort = function (arr, low, high) {
}

var test_data = [
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 2, 3, 4, 5, 6],
    [1],
    [1, 2],
    [2, 1],
    [1, 2, 3],
    [2, 1, 0]
]
for (var i = 0; i < test_data.length; i++) {
    quick_sort(test_data[i], 0, test_data[i].length - 1);
    console.log(test_data[i]);
}
