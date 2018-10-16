/**https://projecteuler.net/problem=34

*/

var gcd=require('./util.js').gcd;
var p=require('./util.js').p;
var jiecheng = require('./util.js').jiecheng;
var xunhuan_string = require('./util.js').xunhuan_string;
var is_prime = require('./util.js').is_prime;
var binary=require("./util.js").binary;


function is_huiwen(str){
    if(str.length==1){
        return true;
    }
    var half=parseInt(str.length/2);
    for(var i=0;i<half;i++){
        if(str[i]!=str[str.length-1-i]){
            return false;
        }
    }
    return true;
}

var cnt=0;

for(var i=1;i<=1000000;i++){
    if(is_huiwen(""+i)&&is_huiwen(binary(i))){
        cnt+=i;
    }
}

p(cnt)