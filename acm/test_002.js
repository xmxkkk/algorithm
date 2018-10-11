/* https://projecteuler.net/problem=27 */
var a=-999;
var b=-1000;

function is_prime(num){
    if(num<=2){
        return false;
    }
    var half=parseInt(num/2);
    for(var i=2;i<=half;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
function prime_len(a,b){
    var cnt=0;
    var n=0;
    while(n<=b-1){
        var num=n*n+n*a+b;
        if(is_prime(num)){
            cnt++;
        }else{
            return cnt;
        }

        n++;
    }
}

var max=0;
var a=0;
var b=0;
for(var i=-999;i<=999;i++){
    for(var j=-1000;j<=1000;j++){
        var len=prime_len(i,j);
        if(len>max){
            max=len;
            a=i;
            b=j;
        }
    }
}


console.log(a+'*'+b+'='+(a*b));

