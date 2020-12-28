const Factorial = (number) => {
    if (number == 0) { return 1}
    let iterator = 1;
    let answer = 1;
    while (number >= iterator) {
        answer = answer * iterator;
        iterator++
    }
    return answer
}

const data = Factorial(0);
console.log(data)

// In OOP

class Factorial {

    constructor(number) {
        this.number = number;
        this.privateAnswer = 1;
    }

    calculate() {
        if (this.number == 0) { return 1 }
        for (let i = 1; i <= this.number; i++) {
            this.privateAnswer *= i;
        }
        return this.privateAnswer;
    }
}

let factorial = new Factorial(5)
console.log(factorial.calculate())
