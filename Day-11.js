let input=[2,7,1,9,5]

let min = input[0]
let max = input[0]

for(let i=1;i<input.length;i++){
    if(input[i] < min){
        min = input[i]
    }
    if(input[i] > max){
        max = input[i]
    }
}

console.log(max - min)
