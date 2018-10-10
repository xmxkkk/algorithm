// var sort=require("./quick_sort_my.js");
var sort = require("./quick_sort.js");
// var sort = require("./merge_sort_my.js");
// var sort = require("./merge_sort.js");

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
    sort(test_data[i]);
    console.log(test_data[i]);
}
