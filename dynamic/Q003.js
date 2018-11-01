'use strict'

var t=0;

var cut=(v,n)=>{
    if(n==0){
        t+=1;
        return;
    }
    for(var i=0;i<v.length;i++){
        if(v[i]<=n){
            cut(v,n-v[i]);
        }
    }
}

t=0
cut([1,2,3],2);
console.log(t);

t=0;
cut([1,2,3],3);
console.log(t);

t=0;
cut([1,2,3],4);
console.log(t);
//1 1 1 1
//1 1 2
//1 2 1
//2 1 1
//1 3
//3 1
//2 2

t=0;
cut([1,2,3],5);
console.log(t);