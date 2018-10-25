let Node=require('./node.js')

//1red 0black

let BinaryTree=function() {
    this.root=null;
    this.insert=function(node){
        this.root=this.insertNode(this.root,node);
    }
    this.find=function(data) {
        return this.findNode(this.root, data);
    }
    this.delete=function(data){
        this.root=this.deleteNode(this.root,data);
    }
    this.deleteNode=function(node,data){
        if(node==null){
            return null;
        }
        if(node.data==data){
            if(node.leftChild==null&&node.rightChild==null){
                return null;
            }
            if(node.leftChild==null){
                return node.rightChild;
            }
            if(node.rightChild==null){
                return node.leftChild;
            }
            var tempNode=this.getRouteNode(node.rightChild);
            node.data=tempNode.data;
            node.rightChild=this.deleteNode(node.rightChild,tempNode.data);
            return node;
        }else if(node.data>data){
            node.leftChild=this.deleteNode(node.leftChild,data);
            return node;
        }else{
            node.rightChild=this.deleteNode(node.rightChild,data);
            return node;
        }
    }
    this.getRouteNode=function(node){
        if(node.left==null){
            return node;
        }else{
            return this.getRouteNode(node.left);
        }
    }
    this.findNode = function (node, data){
        if(node==null){
            return;
        }
        if (node.data == data){
            return node;
        } else if (node.data > data){
            return this.findNode(node.leftChild, data);
        } else if (node.data < data){
            return this.findNode(node.rightChild, data);
        }
    }
    this.insertNode=function(root,node){
        if (root == null) {
            return node;
        }else{
            if(root.data<node.data){
                if(root.rightChild==null){
                    root.rightChild=node;
                }else{
                    root.rightChild = this.insertNode(root.rightChild,node);
                }
            }else{
                if(root.leftChild==null){
                    root.leftChild=node;
                }else{
                    root.leftChild = this.insertNode(root.leftChild,node);
                }
            }
        }
        return root;
    }
    this.print=function(){
        this.printNode(this.root,0,0);
    }
    this.printNode=function(node,deep,pos){
        if(node==null){
            return;
        }
        let blank=""
        for(let i=0;i<deep;i++){
            blank+="---:";
        }
        if(pos==-1){
            blank=blank+"L";
        }else if(pos==1){
            blank=blank+"R";
        }else{
            blank=":";
        }
        console.log(blank+node.data);
        deep++;
        this.printNode(node.leftChild,deep,-1);
        this.printNode(node.rightChild,deep,1);
    }
}

let seed=1;
var random=function(max){
    return parseInt(Math.sin(seed++)*max)+max;
}

// let root = new Node(10, 0, null, null);
let tree = new BinaryTree();

// tree.insert(new Node(20, 0, null, null));
// tree.insert(new Node(15, 0, null, null));
// tree.insert(new Node(8, 0, null, null));
// tree.insert(new Node(6, 0, null, null));
// tree.insert(new Node(9, 0, null, null));
// tree.insert(new Node(13, 0, null, null));
// tree.insert(new Node(16, 0, null, null));

for(let i=1;i<20;i++){
    let val=random(30);
    tree.insert(new Node(val, 0, null, null));
}

let node13 = tree.find(8);
tree.print();
tree.delete(8);
tree.print();
tree.delete(8);
tree.print();