function factorial(n) {
  
    if (n <= 1) {
        return 1;
    } else {
      
        return n * factorial(n - 1);
    }
}


console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
console.log(factorial(5)); // Output: 120
console.log(factorial(7)); // Output: 5040
