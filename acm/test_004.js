

function pow(a, n) {
    var t = 1;
    for (var i = 0; i < n; i++) {
        t *= a;
    }
    return t;
}

function divide(n,arr){
    var arr=[];
    while(true&&n!=1){
        for(var i=2;i<=n;i++){
            if(n%i==0){
                n=parseInt(n/i);
                arr.push(i);
                break;
            }
        }
    }
    return arr;
}

for(var n=2;n<=100;n++){
    var arr=divide(n);

    var map={};
    for(var i=0;i<arr.length;i++){
        if (map[arr[i]]==undefined){
            map[arr[i]]=1;
        }else{
            map[arr[i]] = map[arr[i]]+1;
        }
    }

    var a=1,b=1;
    for(var k in map){
        a*=parseInt(k);
        b*=map[k];
    }
    if(a==b){
        console.log(n);
        console.log(map);
    }
}


