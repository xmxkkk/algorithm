'use strict'
/**
 * 如果我们有面值为1元、3元和5元的硬币若干枚，如何用最少的硬币凑够11元？
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
    let q=1000000000;
    for(let i=0;i<cost.length;i++){
        if(n-cost[i]>=0){
            q=Math.min(q,value[i]+cut(cost,value,n-cost[i]))
        }
    }
    return q;
}

console.log(cut([1,3,5],[1,1,1],6));
