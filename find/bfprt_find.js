var insert_sort=function(arr,left,right){
    var temp,j;
    for(var i=left+1;i<=right;i++){
        temp=arr[i];
        j=i-1;
        while(j>=left&&arr[j]>temp){
            arr[j+1]=arr[j--];
        }
        arr[j+1]=temp;
    }
    return parseInt((right-left)/2)+left;
}
var arr = [2, 1, 3, 6, 0];
insert_sort(arr,0,arr.length-1);
console.log(arr);

