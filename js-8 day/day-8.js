let input=[1,2,3,4,100,200]
let co=[]
let count=1
for(let i=0;i<input.length;i++)
{
    let a=input[i]+1
    let b=input[i+1]
    if(a==b){
        count++
    }
    else{
        co.push(count)
        count=1
    }
}
console.log(Math.max(...co))
