function bubbleSort(arr) {
    // The idea is to compare adjacents elements
    // arr[j] a position lower than arr[j + 1]
    // And move it to the right if is greater than the j + 1 element
    for (let i = 0; i < arr.length; i++) {
        // In the first iteration of the outer loop
        // The last element on the array will be already in the correct position
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[ j + 1]) {
                swap(arr, j, j + 1);
            }
        }

    }

    return arr;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}


console.log(bubbleSort([4,2,1,10,100,0, -1])); // sorted array ASC

// Time complexity O(n^2)
// Space complexity O(n)