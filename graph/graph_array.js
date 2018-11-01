'use strict'

const Queue=require('../array/queue.js')

let func=function() {
    var id = 0;

    function generateId() { return id++; };

    Object.prototype.id = function() {
        var newId = generateId();
        this.id = function() { return newId; };
        return ""+newId;
    };
};
func();


class Vertex{
    constructor(data){
        this.data=data;
    }
}
class Edge{
    constructor(v1,v2,weight){
        this.v1=v1;
        this.v2=v2;
        this.weight=weight;
    }
}

class Graph {
    constructor(){
        this.vertexs=[];
        this.edges=[]
    }
    getChildVertex(v){
        let result=[];
        let i=this.vertexs.indexOf(v);
        for(let j=0;j<this.vertexs.length;j++){
            if(this.edges[i][j]!=0){
                result.push(this.vertexs[j]);
            }
        }
        return result;
    }
    addVertex(v){
        this.vertexs.push(v);
        for(let i=0;i<this.edges.length;i++){
            this.edges[i].push(0);
        }

        let size=this.vertexs.length;
        let newLine=[];
        for(let i=0;i<size;i++){
            newLine.push(0);
        }
        this.edges.push(newLine);
        return this.vertexs.length-1;
    }
    addEdge(e){
        let i=this.vertexs.indexOf(e.v1);
        if(i<0){
            i=this.addVertex(e.v1);
        }

        let j=this.vertexs.indexOf(e.v2);
        if(j<0){
            j=this.addVertex(e.v2);
        }
        this.edges[i][j]=e.weight;
        this.edges[j][i]=e.weight;
    }

    /**
     * 广度优先遍历
     * @param v
     * @param callback
     */
    bfs(v,callback){
        let visited={};
        visited[v.id()]=true;
        let q=new Queue();
        q.push(v);
        callback&&callback(v);
        while(!q.empty()){
            v=q.pop();
            let w=this.getChildVertex(v);
            for(let i=0;i<w.length;i++){
                if(!visited[w[i].id()]){
                    visited[w[i].id()]=true;
                    q.push((w[i]));
                    callback&&callback(w[i]);
                }
            }
        }
    }

    /**
     * 深度优先遍历
     * @param v
     * @param visited
     * @param callback
     */
    dfs(v,visited,callback){
        visited[v.id()]=true;
        callback&&callback(v);
        let w=this.getChildVertex(v);
        for(var i=0;i<w.length;i++){
            if(!(true==visited[w[i].id()])){+
                this.dfs(w[i],visited,callback);
            }
        }
    }

    print(){
        for(let i=0;i<this.edges.length;i++){
            let line="";
            for(let j=0;j<this.edges[i].length;j++){
                line+=this.edges[i][j]+"    ";
            }
            console.log(line);
        }
    }
}

let v1=new Vertex(1);
let v2=new Vertex(2);
let v3=new Vertex(3);
let v4=new Vertex(4);
let v5=new Vertex(5);


let e1=new Edge(v1,v2,2);
let e2=new Edge(v3,v1,1);
let e3=new Edge(v2,v4,3);
let e4=new Edge(v1,v5,6);
let e5=new Edge(v2,v3,4);


let g=new Graph();
g.addEdge(e1);
g.addEdge(e2);
g.addEdge(e3);
g.addEdge(e4);
g.addEdge(e5);

g.print()

g.dfs(v1,{},function(v){
    console.log(v);
});

g.bfs(v1,function(v){
    console.log(v);
});

// console.log(g.getChildVertex(v1));


// g.bfs();