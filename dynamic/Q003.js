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
    let memo={"0":0,"1":1}
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
var coins=[1,2,5,10]
console.log(jump(coins,1));
console.log(jump(coins,2));
console.log(jump(coins,3));
console.log(jump(coins,4));
console.log(jump(coins,5));
console.log(jump(coins,6));
console.log(jump(coins,7));
console.log(jump(coins,8));
console.log(jump(coins,9));
console.log(jump(coins,10));
// console.log(jump([1,2,5,10,20,50,100,200],200))

// console.log(jump([1,2],100))

var memo={"0":0,"1":1,"2":2};

var step=function(v,n){




}

// 1 2 5
// 1 2 3 4 5 6  7  8  9  10
// 1 2 3 5 9 15 26 44 75 128
//           1  2  3  5  9

// 1 2 5 10
// 1 2 3 4 5 6  7  8  9  10
// 1 2 3 5 9 15 26 44 75 129
//           1  2  3  5  10

//1 1 1 1
//1 1 2
//1 2 1
//2 1 1
//1 3
//3 1
//2 2
