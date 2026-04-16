let arr = [4,2,1,7,8];
let k = 2;

// Step 1: first window
let sum = arr[0] + arr[1];
let max = sum;

// Step 2: slide window
for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];
    max = Math.max(max, sum);
}

console.log(max);
