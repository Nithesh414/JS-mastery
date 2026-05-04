/*pattern program one*/

for(let i=1;i<=6;i++){
    console.log("*".repeat(i))
}



let input = "][][";
let stack = [];
let imbalance = 0;

for (let ch of input) {
    if (ch === '[') {
        stack.push(ch);
    } else {
        if (stack.length > 0) {
            stack.pop();
        } else {
            imbalance++;
        }
    }
}

console.log("Swaps needed:", Math.ceil(imbalance / 2));
