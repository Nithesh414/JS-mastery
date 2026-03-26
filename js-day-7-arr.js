/* array concepts*/

let arr=[10, 50, 30, 80, 20]
let sorted=arr.sort()
console.log(sorted);

let arrr=[10, 50, 30, 80, 20]
maximum=99999;
for(let i=0;i<arr.length;i++){
    if(arrr[i] > arrr[i+1]){
 let temp=arrr[i]
 arrr[i]=arrr[i+1]
 arrr[i+1]=temp
    }
}


let neww=[1,2,2,3,4,4,5]

let unique=[]

for(let i=0;i<neww.length;i++){
    let isdupli=false;
    for(let j=0;j<unique.length;j++){
if(unique[j]==neww[i]){
    isdupli=true
}
    }
    if(!isdupli){
        unique.push(neww[i])
    }
}
console.log(unique)
