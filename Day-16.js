/*remove the target element with extra space*/
let input=[3,2,2,3]
let result=[]
let val=3
for(let i=0;i<input.length;i++){
    if(input[i]!=val){
        result.push(input[i])
    }
}
console.log(result)

/*without using extra array*/
let input = [3,2,2,3];
let val = 3;

for(let i = 0; i < input.length; i++){
    if(input[i] == val){
        input.splice(i,1);
        i--;
    }
}

console.log(input);
