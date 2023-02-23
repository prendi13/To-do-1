function pushFront(arr, val) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = val;
    return arr;
}

function popFront(arr) {
    const first = arr[0];
    for (let i = 0; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    console.log(first + ' returned, with ' + arr + ' printed in the function');
}

function insertAt(arr, index, val) {
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i-1];
    }
    arr[index] = val;
    return arr;
}

function removeAt(arr, index) {
    const removed = arr[index];
    for (let i = index; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    console.log(removed + ' returned, with ' + arr + ' printed in the function');
}

function swapPairs(arr) {
    for (let i = 0; i < arr.length-1; i+=2) {
        const temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}

function removeDupes(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    arr.length = i+1;
    return arr;
}
