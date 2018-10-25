let sort=function(arr){
    for(let i=1;i<arr.length;i++){
        let key=arr[i];
        let j=i-1;
        while(i>=0&&arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
}
module.exports=sort