
let input=[1,2,3,4,5,2,6,7]
let input1=[2,3,4]
let out=[]
for(let i=0;i<input.length;i++){
for(let j=0;j<input1.length;j++){
if(!out.includes(input[i])){
if(input[i]==input1[j]){
out.push(input[i])
}
}}
}
console.log(out)
