/**https://projecteuler.net/problem=34

*/

var gcd=require('./util.js').gcd;
var p=require('./util.js').p;
var jiecheng = require('./util.js').jiecheng;
var xunhuan_string = require('./util.js').xunhuan_string;
var is_prime = require('./util.js').is_prime;
var binary=require("./util.js").binary;

var cnt=0;
var n=11;
while(true&&n<1000000){
    n+=2;

    if(!is_prime(n)){
        continue;
    }

    var is=true;

    var ns=""+n;
    for(var i=1;i<ns.length;i++){
        if(!is_prime(parseInt(ns.substring(0, ns.length - i)))){
            is=false;
            break;
        }
    }
    for(var i=1;i<ns.length;i++){
        if (!is_prime(parseInt(ns.substring(i, ns.length)))) {
            is=false;
            break;
        }
    }
    if(is){
        p(n);
        cnt+=n;
    }
}

p(cnt)