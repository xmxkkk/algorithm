
var merge=function(arr,left,mid,right,temp){
    var i=left;
    var j=mid+1;
    var t=0;
    while(i<=mid&&j<=right){
        if(arr[i]<=arr[j]){
            temp[t++]=arr[i++];
        }else{
            temp[t++]=arr[j++];
        }
    }
    while(i<=mid){
        temp[t++]=arr[i++];
    }
    while(j<=right){
        temp[t++]=arr[j++];
    }
    t=0;
    while(left<=right){
        arr[left++]=temp[t++];
    }
}
var merge_sort=function(arr,left,right,temp){
    if(arr.length==1){
        temp[0]=arr[0];
        return;
    }
    if(left<right){
        var mid=parseInt((left+right)/2);
        merge_sort(arr,left,mid,temp);
        merge_sort(arr,mid+1,right,temp);
        merge(arr,left,mid,right,temp);
    }
}

module.exports=function(arr){
    var temp=[];
    merge_sort(arr,0,arr.length-1,temp);
    arr=temp;
}