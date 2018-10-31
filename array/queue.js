'use strict'

class Queue{
    constructor(){
        this.list=[];
    }

    isEmpty(){
        return this.list.length==0;
    }

    enQueue(data){
        this.list.push(data);
    }

    deQueue(){
        if(this.list.length==0){
            return null;
        }

        let item=this.list[0];

        this.list=this.list.splice(1,this.list.length-1);

        return item;
    }
    print(){
        console.log(this.list);
    }
}

module.exports=Queue;