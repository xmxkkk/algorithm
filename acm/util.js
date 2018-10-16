var Stack = function () {
    this.list = [];
}

Stack.prototype.push = function (item) {
    this.list.push(item);
}

Stack.prototype.pop = function () {
    if (this.list.length > 0) {
        return this.list.splice(this.list.length - 1, 1);
    }
}

Stack.prototype.length = function () {
    return this.list.length;
}


module.exports.Stack=Stack;


function is_prime(num) {
    if (num < 2) {
        return false;
    }
    var half = parseInt(num / 2);
    for (var i = 2; i <= half; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

module.exports.is_prime=is_prime;

function pow(a, n) {
    var t = 1;
    for (var i = 0; i < n; i++) {
        t *= a;
    }
    return t;
}

module.exports.pow=pow;


var Set=function(){
    this.list=[];
}

Set.prototype.add=function(item){
    if(this.list.indexOf(item)>=0){
    }else{
        this.list.push(item);
    }
}
Set.prototype.length=function() {
    return this.list.length;
}
Set.prototype.remote=function(item) {
    var pos=this.list.indexOf(item);
    if(pos>=0){
        this.list.splice(pos,1);
    }
}
module.exports.Set=Set;

function gcd(a,b){
    if(b==0)return a;
    return a%b==0?b:gcd(b,a%b);
}

module.exports.gcd=gcd;

function lcm(a,b){
    return a*b/gcd(a,b);
}
module.exports.lcm=lcm;

module.exports.p=console.log;

function jiecheng(a){
    var t=1;
    for(var i=1;i<=a;i++){
        t*=i;
    }
    return t;
}
module.exports.jiecheng=jiecheng;

function xunhuan_string(str){
    var t=[]
    for(var i=0;i<str.length;i++){
        var alpha = str[0];
        var newstr = str.substring(1) + alpha;
        str=newstr;
        t.push(newstr);
    }
    return t;
}
module.exports.xunhuan_string=xunhuan_string;


function binary(num){
    var t="";
    while(num!=0){
        t=num%2+t;
        num=parseInt(num/2);
    }
    return t;
}

module.exports.binary=binary;


