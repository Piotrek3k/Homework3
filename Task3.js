const createCounter = () => {
    // function that creates a counter function
    let result = 0;
  // closure function
  return function counter() {
    result++;
    return result;
  }
}

const repeatFunction = (func, num) => {
    // function that creates a new function that repeats the function passed as an argument a number of times (given as an argument)
     return function repeater() {  // new function that repeats the function passed as an argument
        if(num<0){          // condition for negative numbers - executing the function indefinitely 
            while(true){
                func.apply(this, arguments);
            }
        }
        else{
            while (num>0)
            {
                func.apply(this, arguments);
                num--;
            }
        }
    }
}
