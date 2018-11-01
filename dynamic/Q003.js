'use strict'
/**
 * 有n阶台阶，每次可以上1，2，3，4，5，请问有多少种楼梯的方法？
 */

/**
 *
 * @param v 每次能上的台阶数
 * @param n 总台阶数
 * @returns {number}
 */
let jump=(v,n)=>{
    let t=0;

    let cut=(v,n)=>{
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
    cut(v,n);

    return t;
}

console.log(jump([1,2,3],2));

console.log(jump([1,2,3],3));

console.log(jump([1,2,3],4));

console.log(jump([1,2,3],5));

//1 1 1 1
//1 1 2
//1 2 1
//2 1 1
//1 3
//3 1
//2 2
