'use strict'

class Stack {
    constructor(){
        this.list=[];
    }
    empty(){
        return this.list.length==0;
    }
    peek(){
        if(this.empty()){
            return null;
        }
        return this.list[this.list.length-1];
    }
    pop(){
        if(this.empty()){
            return null;
        }
        let item=this.list[this.list.length-1];
        this.list.splice(this.list.length-1,this.list.length);
        return item;
    }
    push(item){
        this.list.push(item);
        return item;
    }
    size(){
        return this.list.length;
    }
    print(){
        console.log(this.list);
    }
}

module.exports=Stack;

// let s=new Stack();
// s.push('1');
// s.push('2');
// s.push('3');
//
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop());
