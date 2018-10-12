/**https://projecteuler.net/problem=30 */

function pow(a, n) {
    var t = 1;
    for (var i = 0; i < n; i++) {
        t *= a;
    }
    return t;
}

all={}
for(var i=0;i<10;i++){
    all[i+""]=pow(i,5)
}

an=0;

for(var i=2;i<=1000000;i++){
    var is = (i + "");
    var t=0;
    for(var k=0;k<is.length;k++){
        t+=all[is[k]]
    }
    if(i==t){
        console.log(i);
        an+=i;
    }
}

console.log(an)