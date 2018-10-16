/**https://projecteuler.net/problem=33

*/

var gcd=require('./util.js').gcd;
var p=require('./util.js').p;

for(var i=10;i<=99;i++){
    for(var j=i+1;j<=99;j++){
        if (i % 10 == parseInt(i/10) || parseInt(j/10) == j % 10) {
            continue;
        }

        var t=gcd(j,i);
        var ii=i/t;
        var jj=j/t;
        
        

        var a=parseInt(i/10);
        var b=parseInt(j%10);

        if(a*jj==b*ii){
            // p(i+"/"+j);
            p(jj);
        }


    }
}