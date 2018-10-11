Array.prototype.swap = function (i, j) {
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
}

var shell_sort=function(arr){
    var len=arr.length;
    var h=1;
    while(h<len/3)h=3*h+1;
    while(h>=1){
        for(var i=h;i<len;i++){
            for(var j=i;j>=h && arr[j]<arr[j-h];j-=h){
                arr.swap(j,j-h);
            }
        }
    }
}

module.exports=shell_sort;