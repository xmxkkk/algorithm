/**https://projecteuler.net/problem=31
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
*/
var cnt=0;
for(var i=0;i<=1;i++){
    for(var j=0;j<=2;j++){
        for(var k=0;k<=4;k++){
            for(var n=0;n<=10;n++){
                for(var m=0;m<=20;m++){
                    for(var p=0;p<=40;p++){
                        for(var r=0;r<=100;r++){
                            for(var s=0;s<=200;s++){
                                if(i*200+j*100+k*50+n*20+m*10+p*5+r*2+s==200){
                                    cnt++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(cnt);

/*2 1
2
1 1
*/

/*3 2
2 1
1 1 1
*/

/*4 3
2 2
2 1 1
1 1 1 1
*/
/*5 4
5
2 2 1
2 1 1 1
1 1 1 1 1
*/
/*6 5
5 1
2 2 2
2 2 1 1
2 1 1 1 1
1 1 1 1 1 1
*/
/*7 6
5 2
5 1 1
2 2 2 1
2 2 1 1 1
2 1 1 1 1 1
1 1 1 1 1 1 1
*/
/*8
5 2 1
5 1 1 1

 */
/*10 8
10
5 5
5 2 2 1
5 2 1 1 1
5 1 1 1 1 1
2 2 1 1 1 1 1 1
2 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1*/

