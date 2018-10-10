// var find=require('./binary_find.js');
var find = require('./binary_find_my.js');
var test_data=[
    [1,1,1,1,1],
    [1,2,3,4,5],
    [1],
    [1,2],
    [1, 2,3],
    [1, 2,3,4],
    [1, 2,3,4,5],
    [1, 2,3,4,5,6]
]

for(var i=0;i<test_data.length;i++){
    console.log(find(test_data[i],4))
}