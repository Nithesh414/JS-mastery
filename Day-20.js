let input= [1,2,4,5]
for(let i=0;i<input.length-1;i++){
    if(input[i]+1!==input[i+1]){
        console.log(input[i]+1)
    }
}

/* finding the missing number in the sequence */
/*finding the subset array the sum of element is equals to target*/

let input = [1,2,3,4];

let sum = input.reduce((a,b)=>a+b,0);
let target = sum / 2;

let out = [];

for(let i = 0; i < input.length; i++){
    for(let j = i + 1; j < input.length; j++){
        if(input[i] + input[j] === target){
            out.push(input[i],input[j])
        }
    }
}
