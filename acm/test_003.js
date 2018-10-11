/** https://projecteuler.net/problem=28 */

function pow(a,n){
    var t=1;
    for(var i=0;i<n;i++){
        t*=a;
    }
    return t;
}



function sum(n){
    if(n==1)return 1;
    return 2*(n*n+n*n-(n-1)*3)
}

var t=0;
for(var n=1;n<=1001;n+=2){
    t+=sum(n);
}

console.log(t)