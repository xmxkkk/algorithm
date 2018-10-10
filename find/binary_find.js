var binary_find=function(arr,item) {
    var low=0;
    var high=arr.length-1;

    while(low<=high){
        var mid=low+parseInt((high-low)/2);
        if(arr[mid]>item){
            high=mid-1;
        }else if(arr[mid]<item){
            low=mid+1;
        }else{
            return mid;
        }
    }

    return -1;
}

module.exports=function(arr,item) {
    return binary_find(arr,item);
}

