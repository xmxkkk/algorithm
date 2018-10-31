'use strict'

/**
 * 我们知道公司出售一段长度为i英寸的钢条价格Pi(i=1,2,3...)。
 * 长度   1 2 3 4 5   6   7   8   9   10
 * 价格   1 5 8 9 10  17  17  20  24  30
 * 请问钢条怎么切割能卖出最多的钱？
 * https://blog.csdn.net/u013309870/article/details/75193592
 */

var cut=function(p,n,memo) {
    let max=p.length;
    if(n>max){
        let t=0;
        while(n>max){
            t+=cut(p,max,memo);
            n-=max;
        }
        return t+cut(p,n,memo);
    }

    if(memo[n]!=undefined){
        return memo[n];
    }
    if(n==0){
        memo[n]=0;
        return 0;
    }
    let q=-1;
    for(var i=1;i<=n;i++){
        q=Math.max(q,p[i-1]+cut(p,n-i,memo))
    }
    memo[n]=q;
    return q;
}

console.log(cut([1,5,8,9,10,17,17,20,24,30],4,{}));
console.log(cut([1,5,8,9,10,17,17,20,24,30],10,{}));
console.log(cut([1,5,8,9,10,17,17,20,24,30],20,{}));
