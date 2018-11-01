'use strict'

/**
 * 我们知道公司出售一段长度为i英寸的钢条价格Pi(i=1,2,3...)。
 * 长度   1 2 3 4 5   6   7   8   9   10
 * 价格   1 5 8 9 10  17  17  20  24  30
 * 请问钢条怎么切割能卖出最多的钱？
 * https://blog.csdn.net/u013309870/article/details/75193592
 */

/**
 *
 * @param cost 花费列表
 * @param value 价格列表
 * @param n 总数
 * @returns {*}
 */
let cut=function(cost,value,n) {
    if(n==0){
        return 0;
    }

    let q=-1000000000;
    for(let i=0;i<cost.length;i++){
        if(n-cost[i]>=0){
            q=Math.max(q,value[i]+cut(cost,value,n-cost[i]))
        }
    }
    return q;
}
console.log(cut([1,2,3,4,5,6,7,8,9,10],[1,5,8,9,10,17,17,20,24,30],4));
console.log(cut([1,2,3,4,5,6,7,8,9,10],[1,5,8,9,10,17,17,20,24,30],10));
console.log(cut([1,2,3,4,5,6,7,8,9,10],[1,5,8,9,10,17,17,20,24,30],20));

console.log(cut([1,3,5],[1,1,1],11));

// console.log(cut([1,2,3,4,5,6,7,8,9],[1,5,8,9,10,17,17,20,24],4,{}));
// console.log(cut([1,2,3,4,5,6,7,8,9],[1,5,8,9,10,17,17,20,24],10,{}));
// console.log(cut([1,2,3,4,5,6,7,8,9],[1,5,8,9,10,17,17,20,24],20,{}));