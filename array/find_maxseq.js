'use strict'

// -2 11 -4 13 -5 -2

arr=[-2, 11, -4, 13, -5, -2];

var find=function (arr,low,high) {
    if(low<high){
        let mid=parseInt((low+high)/2);
        let leftObj=find(arr,low,mid);
        let rightObj=find(arr,mid+1,hight);

    }
}