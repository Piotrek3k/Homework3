const factorial = (n, accumulator = 1) => {
    // function to calculate factorial of a given number
    // function uses accumulator as a tail call optimization
    if (n === 0) {
      return accumulator
    } else {
      return factorial(n - 1, n * accumulator)
    }
  }

  const power = (base, exponent, accumulator = 1) => {
    // function to calculate power of a given base to a given exponent
    // function uses accumulator as a tail call optimization
    if(exponent === 0) {
        return accumulator
    } else {
        return power(base, exponent - 1, accumulator * base)
    }
  }


  console.log(power(13,3))