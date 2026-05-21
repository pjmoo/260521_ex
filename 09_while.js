let n =0;
while (n<10){
n+=2;
console.log(n);
}

while (true){
    if (Math.random()>0.5){
        console.log("성공!!");
        break;
    } else{
        console.log("실패ㅠㅠ");
    }
}

let w = 0;
while (w<10){
 w++;
 if (w %2 ==1) {
    console.log(w, "홀수");
 }  
}
console.log("------------");
let q = 0;
while (q<10){
 q++;
 if (q %2 ==0) {
    continue;
 }
    console.log(q, "홀수");
 
}