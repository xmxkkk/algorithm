Array.prototype.swap=function(i,j){
    var temp=this[i];
    this[i]=this[j];
    this[j]=temp;
}
var insert_sort=function(arr){
    for(var i=1;i<arr.length;i++){
        var j=i;
        while(j>0&&arr[j]<arr[j-1]){
            arr.swap(j,j-1);
            --j;
        }
    }
}

module.exports=insert_sort;