Array.prototype.remove=function(idx){
    var sliced = this.slice(idx + 1);
    this.length = idx;
    this.push.apply(this, sliced);
}