let input=[1,1,1,1,1,0,0,0,1,1,1,1,1,1]
let count=0
let ab=input.length
let co=[]
let i=0
let n=0
while(n<ab){
    if(input[i]==input[i+1] && input[i]==1){
        count++
       
        input.shift()
        
        input.shift()
       
        n++
    }
    else{
        input.shift()
        
        n++
    }
}
console.log(count)
