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

/* leet code question no : 136 */
var singleNumber = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let count = 0;
        
        for(let j = 0; j < nums.length; j++){
            if(nums[i] === nums[j]){
                count++;
            }
        }
        
        if(count === 1){
            return nums[i];
        }
    }
};

/*finding the least value element*/


let input=[15,13,12,17,11]
let min=0;
for(let i=0;i<input.length;i++){
    if(min=0)
        min=input[i]
    if(input[i]<min)
        min=input[i]}
console.log(min)
