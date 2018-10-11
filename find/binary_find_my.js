var binary_find=function(arr,left,right,target){
    while(left<=right){
        var mid=parseInt((left+right)/2);
        if(arr[mid]==target){
            return mid;
        }else if(arr[mid]>target){
            return binary_find(arr,left,mid,target);
        }else{
            return binary_find(arr,mid+1,right,target);
        }
    }
    return -1;
}

module.exports=function(arr,target){
    return binary_find(arr,0,arr.length-1,target);
}