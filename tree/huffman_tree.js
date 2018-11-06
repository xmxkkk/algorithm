'use strict'

// let func=function() {
//     var id = 0;
//
//     function generateId() { return id++; };
//
//     Object.prototype.id = function() {
//         var newId = generateId();
//         this.id = function() { return newId; };
//         return ""+newId;
//     };
// };
// func();

class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }

    create(list){
        if(list.length<2){
            return list[0];
        }
        while(list.length>1){
            let min1=new Node(1000000000);
            let min2=new Node(1000000000);
            for(let i=0;i<list.length;i++){
                if(list[i].data<min1.data){
                    min1=list[i];
                }

                if(min1.data<=min2.data){
                    let temp=min1;
                    min1=min2;
                    min2=temp;
                }
            }
            console.log(list)


            let pos=list.indexOf(min1);
            list.splice(pos,1);
            pos=list.indexOf(min2);
            list.splice(pos,1);

            let newNode=new Node(min1.data+min2.data);
            list.push(newNode);

            newNode.left=min2;
            newNode.right=min1;

            if(list.length==1){
                return newNode;
            }
        }
    }

    print(){
        this.printNode(this,0,0);
    }
    printNode(node,depth,pos){
        if(node==null){
            return;
        }
        let s="";
        for(let i=0;i<depth;i++){
            s+="---:";
        }
        if(pos==-1){
            s+="L";
        }else if(pos==1){
            s+="R";
        }

        console.log(s+node.data);
        this.printNode(node.left,++depth,-1);
        this.printNode(node.right,depth,1);
    }

}

let node6=new Node(1);
let node2=new Node(2);
let node4=new Node(3);
let node7=new Node(7);
let node1=new Node(4);
let node3=new Node(5);
let node5=new Node(6);

let list=[node5,node7,node1,node2,node3,node4,node6];

let huffman=node1.create(list);
huffman.print();
