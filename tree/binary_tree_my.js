var Node=function(data){
    this.data=data;
    this.left=null;
    this.right=null;
    this.insert=function(target) {
        this.insertNode(this,target);
    }
    this.find=function (data) {
        return this.findNode(this,data);
    }
    this.delete=function(data){
        this.deleteNode(this,data);
    }
    this.deleteNode=function (node,data) {
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

            let tempNode=this.getLeafNode(node.left);
            node.data=tempNode.data;
            node.left=this.deleteNode(node.left,node.data);
            return node;
        }else if(node.data>data){
            node.left=this.deleteNode(node.left,data);
            return node;
        }else {
            node.right=this.deleteNode(node.right,data);
            return node;
        }

    }
    this.getLeafNode=function (node) {
        if(node.right==null){
            return node;
        }else{
            return this.getLeafNode(node.right);
        }
    }
    this.findNode=function(node,data) {
        if(node==null){
            return null;
        }
        if(node.data==data){
            return node;
        }else{
            if(node.data>data){
                return this.findNode(node.left,data);
            }else{
                return this.findNode(node.right,data);
            }
        }
    }
    this.insertNode=function(node,target){
        if(node==null){
            return;
        }
        if(node.data<target.data){
            if(node.right==null){
                node.right=target;
            }else{
                this.insertNode(node.right,target);
            }
        }else{
            if(node.left==null){
                node.left=target;
            }else{
                this.insertNode(node.left,target);
            }
        }
    }
    this.print=function() {
        this.printNode(this,0,0);
    }
    this.printNode=function(node,depth,pos){
        if(node==null){
            return;
        }
        let s="";
        for(let i=0;i<depth;i++){
            s=s+"---:";
        }
        if(pos==-1){
            s=s+"L";
        }else if(pos==1){
            s=s+"R";
        }
        console.log(s+node.data);
        depth+=1;
        this.printNode(node.left,depth,-1);
        this.printNode(node.right,depth,1);
    }
    this.total=function(node){
        if(node!=null){
            total+=node.data;
        }
        if(node.left!=null){
            this.total(node.left);
        }
        if(node.right!=null){
            this.total(node.right);
        }
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

for(var i=2;i<=30;i+=2){
    let root=tree();
    root.delete(i);

    var total=0;
    root.total(root);

    if(240-i!=total){
        console.log(i)
    }
}
// let t=tree();
// t.print();
// t.delete(4);
// t.print()