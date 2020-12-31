const minus = (x, y) => {
    return x - y
}

const Euclidean = (firstNumber, secondNumber) => {
    let difLessSecondNum = minus(firstNumber, secondNumber);
    while (difLessSecondNum > secondNumber) {
        difLessSecondNum = minus(difLessSecondNum, secondNumber)
    }
    if (difLessSecondNum == 0) {
        console.log(secondNumber)
    } else {
        Euclidean(secondNumber, difLessSecondNum)
    }
}

Euclidean(1071, 462);