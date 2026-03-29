/* moving the negative numbers to left side
*/

let input=[2,-3,4,-1,5,-6]

for(let i=0;i<input.length;i++){
    if(input[i] > 0){
        let temp = input[i]
        input.splice(i,1)
        input.push(temp)
        i--
    }
}

console.log(input)
