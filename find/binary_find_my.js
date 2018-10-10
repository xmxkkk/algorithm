var binary_find=function(arr,target){
    var low=0;
    var high=arr.length-1;
    while(low<=high){
        var mid=low+parseInt((high-low)/2);
        if(arr[mid]==target){
            return mid;
        }else if(arr[mid]>target){
            high=mid-1;
        }else if(arr[mid]<target){
            low=mid+1;
        }
    }
    return -1;
}

module.exports=binary_find;