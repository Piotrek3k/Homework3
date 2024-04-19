const lazyMap = (arr, func) => {
    // function that implements a lazy evaluation on an array and a mapping function
    let i = 0
    return function mapOneByOne(){
        // returning function that maps each element of the array individually
        // using closure instead of yield
        if (i >= arr.length){
            return "End of the array"
        }
        result = func(arr[i])
        i++
        return result
    }
}

const fibonacciGenerator = () => {
    // function that implements a lazy evaluation of generating next results of fibonacci sequence
    let a = 0;  // first element of fibonacci sequence
    let b = 1;  // second element of fibonacci sequence

    return function fibonacci() {
        const result = a;   // result = F(n-2)
        a = b;              // F(n-2) = F(n-1)
        b = result + a;     // F(n-1) = F(n-2) + F(n-1) = F(n)
        return result;      
    };
}
