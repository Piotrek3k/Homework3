const lazyMap = (arr, func) => {
    // function that implements a lazy evaluation on an array and a mapping function
    let i = 0
    return{
        next() {
        // returning function that maps each element of the array individually
        // using closure instead of yield
        if (i >= arr.length){
            return { done: true }
        }
        value = func(arr[i])
        i++
        return { value, done: false }
    }}
}

const fibonacciGenerator = () => {
    // function that implements a lazy evaluation of generating next results of fibonacci sequence
    let a = 0;  // first element of fibonacci sequence
    let b = 1;  // second element of fibonacci sequence

    return { 
        next() {
        const value = a;   // result = F(n-2)
        a = b;              // F(n-2) = F(n-1)
        b = value + a;     // F(n-1) = F(n-2) + F(n-1) = F(n)
        return { value, done: false }; 
    }     
    };
}

// const arr = [1, 2, 5, 7, 8];
// const getValue = lazyMap(arr, x => x * 2);
// console.log(getValue.next())
// console.log(getValue.next())
// console.log(getValue.next())
// console.log(getValue.next())
// console.log(getValue.next())
// console.log(getValue.next())

// const fibonacci = fibonacciGenerator()
// console.log(fibonacci.next())
// console.log(fibonacci.next())
// console.log(fibonacci.next())
// console.log(fibonacci.next())
// console.log(fibonacci.next())
// console.log(fibonacci.next())