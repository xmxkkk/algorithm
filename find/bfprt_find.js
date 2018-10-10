Array.prototype.swap = function (i, j) {
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
}
var insert_sort=function(arr,left,right) {
    var temp,j;
    for(var i=left+1;i<=right;i++){
        temp=arr[i];
        j=i-1;
        while(j>=left&&arr[j]>temp){
            arr[j+1]=arr[j--];
        }
        arr[j+1]=temp;
    }
    return parseInt((right - left) / 2) + left;
}
// var insert_sort=function(arr,left,right){
//     for(var i=left+1;i<right+1;i++){
//         var j=i;
//         while(j>left&&arr[j]<arr[j-1]){
//             arr.swap(j,j-1);
//             --j;
//         }
//     }
//     return parseInt((right-left)/2)+left;
// }
var get_pivot_index=function(arr,left,right){
    if(right-left<5){
        return insert_sort(arr,left,right);
    }
    var sub_right=left-1;
    for(var i=left;i+4<=right;i+=5){
        var index=insert_sort(arr,i,i+4);
        arr.swap(++sub_right,index);
    }
    return bfprt(arr,left,sub_right,parseInt((sub_right-left+1)/2+1));
}
var partition=function(arr,left,right,pivot_index){
    arr.swap(pivot_index,right);
    var divide_index=left;
    for(var i=left;i<right;i++){
        if(arr[i]<arr[right]){
            arr.swap(divide_index++,i);
        }
    }
    arr.swap(divide_index,right);
    return divide_index;
}
var bfprt=function(arr,left,right,k){
    var pivot_index=get_pivot_index(arr,left,right);
    var divide_index=partition(arr,left,right,pivot_index);
    var num=divide_index-left+1;
    if(num==k){
        return divide_index;
    }else if(num>k){
        return bfprt(arr,left,divide_index-1,k);
    }else{
        return bfprt(arr,divide_index+1,right,k-num);
    }
}
var arr = [2, 100, 3, 6, 0];
for(var i=0;i<arr.length;i++){
    var idx=bfprt(arr,0,arr.length-1,i+1)
    console.log(i+1+","+arr[idx]);
}
