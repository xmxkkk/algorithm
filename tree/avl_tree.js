'use strict'

class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
        this.height=0;
    }

    insert(target){
        return this.insertNode(this,target)
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

    _height(t){
        return t==null?-1:t.height;
    }
    insertNode(t,x){
        if(t==null){
            return x;
        }
        let compare=x.data<t.data;
        if(compare) {
            t.left = this.insertNode(t.left,x);
            let leftHeight=this._height(t.left)
            let rightheight=this._height(t.right)
            if ((leftHeight - rightheight) == 2) {
                if (x.data < t.left.data) {
                    t = this.rightRotate(t);
                } else {
                    t = this.leftAndRightRotate(t);
                }
            }
        }else {
            t.right = this.insertNode(t.right, x);
            let leftHeight=this._height(t.left)
            let rightheight=this._height(t.right)
            if ((rightheight - leftHeight) == 2) {
                if (x.data > t.right.data) {
                    t = this.leftRotate(t);
                } else {
                    t = this.rightAndLeftRotate(t);
                }
            }
        }
        t.height = Math.max(this._height(t.left), this._height(t.right)) + 1;

        return t;
    }
    remove(target){
        this.removeNode(this,target);
    }
    removeNode(node,element){
        if(node==null){
            return null;
        }
        if(element<node.data){
            node.left=this.removeNode(node.left,element);
        }else if(element>node.data){
            node.right=this.removeNode(node.right,element);
        }else{
            if(node.left!=null&&node.right!=null){
                let tempNode=this._getLeafNode(node.left);
                node.data=tempNode.data;
                node.left=this.removeNode(node.left,node.data);
            }else if(node.left==null){
                node=node.right;
            }else if(node.right==null){
                node=node.left;
            }

            // if(node.left==null&&node.right==null){
            //     return null;
            // }
            // if(node.left==null){
            //     node.left=null;
            // }
            // if(node.right==null){
            //     node.right=null;
            // }
            //
            if(node!=null){
                let leftHeight=this._height(node.left);
                let rightHeight=this._height(node.right);
                if((leftHeight-rightHeight)==2){
                    if(element.data<node.left.data){
                        node = this.rightRotate(node);
                    }else{
                        node=this.leftAndRightRotate(node)
                    }
                }else if((leftHeight-rightHeight)==-2){
                    if(element.data>node.right.data){
                        node=this.leftRotate(node);
                    }else{
                        node=this.rightAndLeftRotate(node);
                    }
                }
            }
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

    rightRotate(t){
        let newTree=t.left;
        t.left=newTree.right;
        newTree.right=t;
        t.height=Math.max(this._height(t.left),this._height(t.right))+1;
        newTree.height=Math.max(this._height(newTree.left),this._height(newTree.right))+1;
        return newTree;
    }
    leftRotate(t){
        let newTree=t.right;
        t.right=newTree.left;
        newTree.left=t;
        t.height=Math.max(this._height(t.left),this._height(t.right))+1;
        newTree.height=Math.max(this._height(newTree.left),this._height(newTree.right))+1;
        return newTree;
    }
    leftAndRightRotate(t){
        t.left=this.leftRotate(t.left);
        return this.rightRotate(t);
    }
    rightAndLeftRotate(t){
        t.right=this.rightRotate(t.right);
        return this.leftRotate(t);
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
    let root=new Node(1);
    for(let i=2;i<16;i++){
        root=root.insert(new Node(i));
    }
    return root;
}
// let t=tree()
// t.print()
// console.log(t.find(8).data)


// let t=tree();
// t.print();

// for(var i=2;i<=30;i+=2){
//     let root=tree();
//     root.remove(i);
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
t.remove(1);
t.remove(2);
t.remove(3);
t.remove(6);
t.remove(5);
t.remove(7);

t.print()
// t.insert(new Node(4));
// t.print()