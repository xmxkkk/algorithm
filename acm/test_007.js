/**https://projecteuler.net/problem=32
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/

var Set=require('./util.js').Set;

function count(num,str){
    var cnt=0;
    for(var i=0;i<num.length;i++){
        if(num[i]==str){
            cnt+=1;
            if(cnt>1){
                return false;
            }
        }
    }
    return true;
}

function is_ok(num){
    if(num.indexOf("0")>=0){
        return false;
    }
    if(num.length!=9){
        return false;
    }
    for(var i=1;i<=9;i++){
        if (!count(num, i + "")){
            return false;
        }
    }
    return true;
}

var p=console.log;

// p(is_ok("123456789"))
// p(is_ok("123456781"))

var set=new Set();

for(var i=1;i<=9;i++){
    for(var j=1000;j<=9999;j++){
        var no=i*j;
        if(is_ok(""+i+j+no)){
            p(i+"x"+j+"="+no);
            set.add(no);
        }
    }
}


for (var i = 10; i <= 99; i++) {
    for (var j = 100; j <= 999; j++) {
        var no = i * j;
        if (is_ok("" + i + j + no)) {
            p(i + "x" + j + "=" + no);
            set.add(no);
        }
    }
}
var t=0;
for(var i=0;i<set.list.length;i++){
    t+=set.list[i];
}

p(t);