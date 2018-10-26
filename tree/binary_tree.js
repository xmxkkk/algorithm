'use strict'

var total=0;

class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
    find(data){
        return this._findNode(this,data);
    }
    _findNode(node,data){
        if(node==null){
            return null;
        }
        if(node.data>data){
            return this._findNode(node.left,data);
        }else if(node.data<data){
            return this._findNode(node.right,data);
        }else{
            return node;
        }
    }

    insert(target){
        this._insertNode(this,target);
    }
    _insertNode(node,target){
        if(node==null){
            return;
        }
        if(node.data>target.data){
            if(node.left==null){
                node.left=target;
            }else{
                this._insertNode(node.left,target);
            }
        }else if(node.data<target.data){
            if(node.right==null){
                node.right=target;
            }else{
                this._insertNode(node.right,target);
            }
        }
    }
    delete(data){
        this._deleteNode(this,data);
    }
    _deleteNode(node,data){
        if(node==null){
            return null;
        }
        if(node.data==data){
            if(node.left==null&&node.right==null){
                return null;
            }
            if(node.left==null){
                return node.right;
            }
            if(node.right==null){
                return node.left;
            }
            let tempNode=this._getLeafNode(node.left);
            node.data=tempNode.data;
            console.log(node.data)
            console.log(data);
            node.left=this._deleteNode(node.left,node.data);
        }else if(node.data>data){
            node.left=this._deleteNode(node.left,data);
        }else if(node.data<data){
            node.right=this._deleteNode(node.right,data);
        }
        return node;
    }
    _getLeafNode(node){
        if(node.right==null){
            return node;
        }else{
            return this._getLeafNode(node.right);
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
    total(node){
        if(node==null){
            return;
        }
        total+=node.data;
        this.total(node.left);
        this.total(node.right);
    }
}

var tree=function () {
    let root=new Node(16)
    root.insert(new Node(8))
    root.insert(new Node(24))
    root.insert(new Node(4))
    root.insert(new Node(12))
    root.insert(new Node(20))
    root.insert(new Node(28))


    root.insert(new Node(2))
    root.insert(new Node(6))
    root.insert(new Node(10))
    root.insert(new Node(14))
    root.insert(new Node(18))
    root.insert(new Node(22))
    root.insert(new Node(26))
    root.insert(new Node(30))
    return root;
}

// let t=tree();
// t.print();
//
// for(var i=2;i<=30;i+=2){
//     let root=tree();
//     root.delete(i);
//
//     var total=0;
//     root.total(root);
//
//     if(240-i!=total){
//         console.log(i)
//     }
// }
let t=tree();
t.print();
t.delete(4);
t.print()
// t.insert(new Node(4));
// t.print()