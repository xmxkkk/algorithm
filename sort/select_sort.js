Array.prototype.swap = function (i, j) {
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
}

var select_sort=function(arr){
    for(var i=0;i<arr.length;i++){
        var min=i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        if(min!=i){
            arr.swap(i,min);
        }
    }
}

module.exports=select_sort;