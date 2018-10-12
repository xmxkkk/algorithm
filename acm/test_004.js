

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

function prime_map(arr){
    var map = {};
    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i]] == undefined) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]] = map[arr[i]] + 1;
        }
    }
    return map;
}

function val(a,b){
    var arr=divide(a);
    var map=prime_map(arr);

    var val="";
    for(var k in map){
        val+=(k+"^"+(map[k]*b)+"*");
    }
    val=val.substring(0,val.length-1);
    return val;
}

// function di(map){
//     var di="";
//     for(var k in map){
//         di+=(k+",");
//     }
//     return di;
// }

// function mi(map,b){
//     var mi="";
//     for(var k in map){
//         mi+=(map[k]*b+",");
//     }
//     return mi;
// }


/**/
N=100;
cnt=0;
all=[];

for (var n = 2; n <= N; n++) {
    for (var m = 2; m <= N; m++) {
        var val1=val(n,m);
        if (all.indexOf(val1)<0){
            all.push(val1);
            cnt++;
        }
    }
}

console.log(cnt);
console.log(all.length);