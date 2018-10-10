var quick_sort=function(arr,low,high){
    if(low>=high){
        return;
    }

    var i=low;
    var j=high;
    var key=arr[j];

    while(i<j){
        while(i<j&&arr[i]<=key){
            ++i;
        }
        arr[j]=arr[i];
        while(i<j&&arr[j]>key){
            --j;
        }
        arr[i]=arr[j];
    }
    arr[i]=key;
    quick_sort(arr,low,i-1);
    quick_sort(arr,i+1,high);
}
module.exports = function (arr) {
    quick_sort(arr, 0, arr.length - 1);
};
