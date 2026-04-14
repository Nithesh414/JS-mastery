
/* palindrome program in two pointer*/

function isPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

let input = [1,2,3,3,2,1];
console.log(isPalindrome(input));


/* palindrome in recursion*/
function isPalindrome(arr, left, right) {
    if (left >= right) return true;

    if (arr[left] !== arr[right]) return false;

    return isPalindrome(arr, left + 1, right - 1);
}

let input = [1,2,3,3,2,1];
console.log(isPalindrome(input, 0, input.length - 1));
