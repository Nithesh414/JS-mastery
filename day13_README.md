# Day 13 – Time & Space Complexity (Loop vs Recursion)

## 🔹 Problem Context
Given a string of digits `"123456"`, find the **sum of even digits**.

---

## 🟢 Method 1: Loop Approach

```javascript
let a = '123456'
let sum = 0

for(let i = 0; i < a.length; i++){
    if(a[i] % 2 == 0){
        sum += Number(a[i])
    }
}

console.log(sum)
```

### ⏱ Time Complexity
- **O(n)** → Loop runs `n` times

### 💾 Space Complexity
- **O(1)** → Only one variable used

---

## 🟡 Method 2: Recursion Approach

```javascript
function sums(a, i){
    if(i === a.length) return 0

    let val = (a[i] % 2 == 0) ? Number(a[i]) : 0

    return val + sums(a, i + 1)
}

let result = sums('123456', 0)

console.log(result)
```

### ⏱ Time Complexity
- **O(n)** → Function called `n` times

### 💾 Space Complexity
- **O(n)** → Call stack stores `n` calls

---

## ⚖️ Comparison Table

| Method     | Time Complexity | Space Complexity | Efficiency |
|------------|----------------|------------------|-----------|
| Loop       | O(n)           | O(1)             | ✅ Best   |
| Recursion  | O(n)           | O(n)             | ❌ Costly |

---

## 🧠 Key Insights

- Loop is **more memory efficient**
- Recursion is **clean but uses extra stack memory**
- Prefer loop in most real-world problems unless recursion is required

---

## 🚀 Interview Tip

If interviewer asks:

**"Which is better?"**

👉 Answer:
> Loop is better because it uses constant space, while recursion uses additional memory due to the call stack.

---

## 🎯 Summary

- Loop → Efficient & practical  
- Recursion → Elegant but memory heavy  
