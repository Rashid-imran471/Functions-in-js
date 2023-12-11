function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func(...args);
      } else {
        return function (...nextArgs) {
          return curried(...args, ...nextArgs);
        };
      }
    };
  }
  
  // Test the curry function with a function that adds two numbers
  function add(a, b) {
    return a + b;
  }
  
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(2)(3)); // Output: undefined (curried function)
  console.log(curriedAdd(2, 3)); // Output: 5 (final result)
  console.log(curriedAdd(2)(3)(4)); // Output: 9 (final result)
  