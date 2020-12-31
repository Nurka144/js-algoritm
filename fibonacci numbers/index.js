const FibonacciNumbers = (n) => {
    return n < 2 ? n : FibonacciNumbers(n - 1) + FibonacciNumbers(n - 2)
}

const Fibonacci = (number) => {
    let iterator = 0
    while (number >= iterator) {
        console.log(FibonacciNumbers(iterator))
        iterator++;
    }
}

Fibonacci(9)
