/**https://projecteuler.net/problem=34

*/

var gcd=require('./util.js').gcd;
var p=require('./util.js').p;
var jiecheng = require('./util.js').jiecheng;
var xunhuan_string = require('./util.js').xunhuan_string;
var is_prime = require('./util.js').is_prime;

var cnt=0;
for(var i=3;i<1000000;i+=2){
    var t=xunhuan_string(""+i);
    var is=true;
    for(var j=0;j<t.length;j++){
        if(!is_prime(parseInt(t[j]))){
            is=false;
            break;
        }
    }
    if(is){
        cnt++;
        p(i);
    }
}
p(cnt+1);