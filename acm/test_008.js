/**https://projecteuler.net/problem=33

*/

var gcd=require('./util.js').gcd;
var p=require('./util.js').p;

for(var i=10;i<=99;i++){
    for(var j=i+1;j<=99;j++){
        
        var i0=parseInt(i/10);
        var i1=i%10;

        var j0=parseInt(j/10);
        var j1=j%10;

        if(i1==j0&&i*j1==j*i0){
            p(i+"/"+j)
            p(i0+"/"+j1)
        }


    }
}