
/* dsa array concepts problem 1*/

let arr=[1, 2, 3, 4];
let sum=0
let sum1=0
function sumey(arr,i){
    if(i<arr.length){
    sum1+=arr[i]
    sumey(arr,i+1)}
    
}
sumey(arr,0)
console.log(sum1)
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}

console.log(sum)
