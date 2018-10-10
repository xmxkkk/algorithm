function quick_sort(arr,low,high){
    if(low>=high){
        return;
    }
    var i=low;
    var j=high;
    var key=arr[low];

    while(i<j){
        while(i<j&&key<arr[j]){
            j--;
        }
        arr[i]=arr[j];
        while(i<j&&key>=arr[i]){
            i++;
        }
        arr[j]=arr[i];
    }
    
    arr[i]=key;
    quick_sort(arr,low,i-1);
    quick_sort(arr,i+1,high);
}

module.exports = function (arr) {
    quick_sort(arr, 0, arr.length - 1);
};