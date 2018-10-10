function quick_sort(arr,low,high){
    if(low>=high){
        return;
    }
    var i=low;
    var j=high;
    var key=arr[low];

    while(i<j){
        while(i<j&&key<=arr[j]){
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

var test_data=[
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1,1,1,1,1,1],
    [1,2,3,4,5,6],
    [1]
]
for(var i=0;i<test_data.length;i++){
    quick_sort(test_data[i],0,test_data[i].length-1);
    console.log(test_data[i]);
}
