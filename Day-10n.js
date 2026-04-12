
/*
for sub array for getting the target by adding the elements of subarray*/
let input=[1,2,3,7,5]
let out=[]
let target=12
for(let i=0;i<input.length;i++){
   
        for(k=j+1;k<input.length;k++){
            if((input[i]+input[j]+input [k])==target){
                out.push(input[i], input [j],input[k])
            }
        }
    }
}

console.log(out)
