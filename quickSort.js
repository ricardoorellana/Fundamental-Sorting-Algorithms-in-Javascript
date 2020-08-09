// Quick sort is a Divide and Conquer algorithm
// Time complexity: best case in O(n log n)
// Worst case: O(n^2)
// Space complexity O(1)
function quicksort(arr, lo, hi) {
    if (hi <= lo) return;

    var p = partition_r(arr, lo, hi);
    quicksort(arr, lo, p - 1);
    quicksort(arr, p + 1, hi);
}

function partition(arr, lo, hi) {
    let i = lo, j = hi + 1; // lo is my pivot

    while (i < j) {
        while (arr[++i] < arr[lo]) { // find item on left to swap
            if (i === hi) break;
        }

        while (arr[lo] < arr[--j]) { // find item on righ to swap
            if (j === lo) break;
        }

        if (i <= j) { //check if ponters cross
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
        }
    }

    // swap pivot lo with partitioning item
    [arr[lo], arr[j]] = [arr[j], arr[lo]];

    // return index of the item now known to be in place
    return j;
}

function partition_r(arr, lo, hi) {
    var random = Math.floor(Math.random() * (hi - lo) + lo);

    [arr[random], arr[lo]] = [arr[lo], arr[random]];

    return partition(arr, lo, hi)
}

var arr = [];

for (let i = 0; i < 24; i++) {
    arr[i] = Math.floor(Math.random() * 10);
}

quicksort(arr, 0, arr.length - 1);

console.log(arr);