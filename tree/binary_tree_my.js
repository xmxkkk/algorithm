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
    this.deleteNode=function (node, data) {
        if(node==null){
            return;
        }
        if(node.data==data){
            if(node.left==null&&node.right==null){
                return;
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
        this.printNode(this,0);
    }
    this.printNode=function(node,depth){
        if(node==null){
            return;
        }
        let s="";
        for(let i=0;i<depth;i++){
            s=s+"---:";
        }
        console.log(s+node.data);
        depth+=1;
        this.printNode(node.left,depth);
        this.printNode(node.right,depth);
    }
}

let i=30;
function random(max){
    return parseInt(Math.abs(Math.sin(i++)*max));
}

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



root.print();

// console.log(root.find(2).data)
root.delete(16)
root.print();

