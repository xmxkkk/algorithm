'use strict'

/**
 * 我们知道公司出售一段长度为i英寸的钢条价格Pi(i=1,2,3...)。
 * 长度   1 2 3 4 5   6   7   8   9   10
 * 价格   1 5 8 9 10  17  17  20  24  30
 * 请问钢条怎么切割能卖出最多的钱？
 * https://blog.csdn.net/u013309870/article/details/75193592
 */


var cut=function(c,p,n,memo) {
    let max=c[c.length-1];
    if(n>max){
        let t=0;
        while(n>max){
            t+=cut(c,p,max,memo);
            n-=max;
        }
        return t+cut(c,p,n,memo);
    }

    if(memo[n]!=undefined){
        return memo[n];
    }

    let q=-1;
    for(var i=0;i<c.length;i++){
        if(n-c[i]>=0){
            q=Math.max(q,p[i]+cut(c,p,n-c[i],memo))
        }
    }
    memo[n]=q;
    return q;
}

// console.log(cut([1,2,3,4,5,6,7,8,9,10],[1,5,8,9,10,17,17,20,24,30],4,{}));
// console.log(cut([1,2,3,4,5,6,7,8,9,10],[1,5,8,9,10,17,17,20,24,30],10,{}));
// console.log(cut([1,2,3,4,5,6,7,8,9,10],[1,5,8,9,10,17,17,20,24,30],20,{}));

console.log(cut([1,2,3,4,5,6,7,8,9],[1,5,8,9,10,17,17,20,24],4,{}));
console.log(cut([1,2,3,4,5,6,7,8,9],[1,5,8,9,10,17,17,20,24],10,{}));
console.log(cut([1,2,3,4,5,6,7,8,9],[1,5,8,9,10,17,17,20,24],20,{}));