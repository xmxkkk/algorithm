/*
http://acm.nyist.edu.cn/JudgeOnline/problem.php?pid=2
*/

var Stack=function(){
    this.list=[];
}

Stack.prototype.push=function(item){
    this.list.push(item);
}

Stack.prototype.pop=function(){
    if(this.list.length>0){
        return this.list.splice(this.list.length-1,1);
    }
}

Stack.prototype.length=function() {
    return this.list.length;
}


var check_str=function(str){
    var stack = new Stack();
    for(var i=0;i<str.length;i++){
        if(str[i]=='['||str[i]=='{'||str[i]=='('){
            stack.push(str[i]);
        }else{
            var temp=stack.pop();
            if(temp!='['&&str[i]==']'){
                return 'NO';
            } else if (temp != '{' && str[i] == '}') {
                return 'NO';
            } else if (temp != '(' && str[i] == ')') {
                return 'NO';
            }
        }
    }
    return 'YES';
}

console.log(check_str("[(])"));
console.log(check_str("(])"));
console.log(check_str("([[]()])"));