

/*finding the substring sum of 15*/

let arr = [4,2,1,7,8];
let k = 2;
let sum = arr[0] + arr[1];
let max = sum;
for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];
    max = Math.max(max, sum);
}

console.log(max);
