'use strict'

/**
 * 假设我们有8种不同面值的硬币｛1，2，5，10，20，50，100，200｝，用这些硬币组合够成一个给定的数值n。
 * 例如n=200，那么一种可能的组合方式为200 = 3 * 1 + 1＊2 + 1＊5 + 2＊20 + 1 * 50 + 1 * 100.
 * 问总过有多少种可能的组合方式？
 */

var t=0;

var cut=function (v,n,memo) {
    let max=v[v.length-1];
    if(n>max){
        let m=0;
        while(n>max){
            m+=cut(v,n-max);
            n-=max;
        }
        return m+cut(v,n,memo);
    }

    if(memo[n]!=undefined){
        return memo[n];
    }

    if(n==0){
        t+=1;
        return;
    }
    for(var i=0;i<v.length;i++){
        if(v[i]<=n){
            var xx=cut(v,n-v[i],memo);
            memo[n-v[i]]=xx;
        }
    }
}
// 1,1,1,1
// 1,1,2
// 2,2
cut([1,2,5,10,20,50,100,200],200,{});
// cut([1,2,5],5,{});

console.log(t);