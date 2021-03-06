'use strict'

class Queue{
    constructor(){
        this.list=[];
    }

    empty(){
        return this.list.length==0;
    }

    back(){
        if(this.empty()){
            return null;
        }
        return this.list[this.list.length-1];
    }
    front(){
        if(this.empty()){
            return null;
        }
        return this.list[0];
    }

    push(data){
        this.list.push(data);
    }

    pop(){
        if(this.list.length==0){
            return null;
        }

        let item=this.list[0];
        this.list.splice(0,1);
        return item;
    }

    size(){
        return this.list.length;
    }

    print(){
        console.log(this.list);
    }
}

module.exports=Queue;

// let q=new Queue();
// q.push("1");
// q.push("2");
// q.push("3");
//
// console.log(q.pop());console.log(q.pop());console.log(q.pop());
