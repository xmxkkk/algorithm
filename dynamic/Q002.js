'use strict'

/**
 * 假设我们有8种不同面值的硬币｛1，2，5，10，20，50，100，200｝，用这些硬币组合够成一个给定的数值n。
 * 例如n=200，那么一种可能的组合方式为200 = 3 * 1 + 1＊2 + 1＊5 + 2＊20 + 1 * 50 + 1 * 100.
 * 问总过有多少种可能的组合方式？
 */

/**
 *
 * @param coins 硬币列表
 * @param n 总数
 * @returns {*}
 */
let count=(coins,n)=>{
    let meno={};
    for(let i=0;i<n+1;i++){
        meno[i]=0;
    }
    meno[0]=1;

    for(let i=0;i<coins.length;i++){
        for(let j=coins[i];j<=n;j++){
            meno[j]=meno[j]+meno[j-coins[i]];
        }
    }
    return meno[n];
}

// 73682
// console.log(count([1,2,5,10,20,50,100,200],5));
console.log(count([1,2,5],10));

// 5
// 11111
// 1112
// 122

// 10=1,2,5
// 1 1 1 1 1 1 1 1 1 1
// 1 1 1 1 1 1 1 1 2
// 1 1 1 1 1 1 2 2
// 1 1 1 1 2 2 2
// 1 1 2 2 2 2

// 2 2 2 2 2
// 5 1 1 1 1 1
// 5 1 1 1 2
// 5 1 2 2
// 5 5
