/**https://projecteuler.net/problem=34

*/

var gcd=require('./util.js').gcd;
var p=require('./util.js').p;
var jiecheng = require('./util.js').jiecheng;
var xunhuan_string = require('./util.js').xunhuan_string;


var map={};
for(var i=1;i<=9;i++){
    map[i]=jiecheng(i);
}

p(map);
map[0]=1;
for(var i=3;i<=100000000;i+=1){
    var t=0;
    var is=""+i;
    for(var j=0;j<is.length;j++){
        t+=map[is[j]];
    }
    if(i==t){
        p(t);
    }
}

