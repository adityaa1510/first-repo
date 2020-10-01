// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

let x = 10


cal1 = 0
function fibonacciIterative(n){    //O(n) slow
    let numbers = [0,1];
    for(let i = 1;i < n+1;i++){
        cal1++
        numbers.push(numbers[i] + numbers[i-1])
    }
    return numbers[n]
}
console.log(fibonacciIterative(x));
console.log("We did ",cal1, " calculations in fibonacci Iterative ")




cal2 = 0
function fibonacciRecursive(n) {        //O(2^n) very slow
    cal2++
    if (n < 2){
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2)
}

console.log(fibonacciRecursive(x))
console.log("We did ",cal2, " calculations in fibonacci Recursive ")






let cal = 0
function fibbmaster() {
    let cache = {};
    return function fibonacciRecursive(n) {    //O(n) slow
        cal++;
        if (cache[n]) {                          // n in cache is not equal to cache.n but equal to cache[n]
            return cache[n]
        } else {
            if (n < 2) {
                //cache[n] = n;
                return n;
            } else {
                cache[n] = fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
                return cache[n];
            }
        }

    }
} 
const fibb = fibbmaster()
console.log(fibb(x));
console.log("We did ",cal, " calculations in fibonacci(Recursion & Dynamic Programing) ");

