const arr = [1, 2, 3, 5, 7 , 6, 4];

const BinarySearch = (arr, n) => {
    let left = 0;
    let right = arr.length;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (n < arr[middle]) {
            right = middle - 1
        }
        if (n > arr[middle]) {
            left = middle + 1
        }
        if (n == arr[middle]) {
            return `Value = ${n}; Index = ${middle}`
        }
    }
}

console.log(BinarySearch(arr, 5))

