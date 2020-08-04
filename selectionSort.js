function selectionSort(arr) {
    // temp var to store the position of minimum elem.
    let minimum;

    for (let i = 0; i < arr.length - 1; i++) {

        // assuming the first element to be the minimu m of the unsorted array
        minimum = i;

        // gives the effective size of the unsorted array
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minimum]) { // finds the min elem.
                minimum = j;
            }
        }

        // putting the minimum element on its proper position.
        swap(minimum, i, arr);
    }
}

function swap(min, elem, arr) {
    let temp = arr[min];
    arr[min] = arr[elem];

    arr[elem] = temp;
}

var arr = [4,2,-1,4,0];

selectionSort(arr);

console.log(arr);

// Time complexity O(n^2)
// Space complexity O(n)