console.log('release tag v1')

const quickSort = (arr, low, hi) => {
    const a = Math.floor(Math.random() * arr.length)
    const pivot = arr[a]
    while (low <= hi) {
        while (arr[hi] > pivot) {
            hi--;
        } 
        while (arr[low] < pivot) {
            low++;
        }
        if (low <= hi) {
            const tmp = arr[low];
            arr[low] = arr[hi];
            arr[hi] = tmp;
            hi--;
            low++;
        }
    }
    return low;
}

const quick = (arr, low = 0, hi = arr.length-1) => {
    if (low < hi) {
        const index = quickSort(arr, low, hi);
        quick(arr, low, index-1);
        quick(arr, index, hi)
    }
    return arr
}

const array = [1, 3, 4, 7, 2, 6, 5];

console.log(quick(array));