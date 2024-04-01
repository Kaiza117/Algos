// 1
function biggie(arr){
    for (i in arr){
        if (arr[i]>0){
            arr[i] = "BIG"
        }
    }
    return(arr)
}

console.log(biggie(arr))

// 2
function lowHigh(arr){
    let lowest = highest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (lowest > arr[i]) {
            lowest = arr[i];
        }
        if (highest < arr[i]) {
            highest = arr[i];
        }
    }
    console.log(lowest);
    return highest;
}

console.log(lowHigh([5,7,1,2,3]))

// 3
function printOneReturnAnother(arr) {
    console.log( arr[arr.length - 2]);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            return arr[i];
        }
    }
}

console.log(printOneReturnAnother([4,3,6,7,1]))

// 4
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

console.log(double([1,2,3]))

// 5
function countPositives(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}

console.log(countPositives())

// 6
function evensAndOdds(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0) {
            console.log("That's odd!");
        }

        if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
            console.log("Even more so!");
        }
    }
}

console.log(evensAndOdds([3,3,3,2,2,2,1,3,2]))

// 7
function incrementSecond(arr) {
    for (let i = 1; i < arr.length; i += 2) {
        arr[i] = arr[i] + 1;
        console.log(i);
    }
    return arr;
}

// 8
function previousLengths(arr) {
    let str;
    for (let i = arr.length - 1; i > 0; i--) {
        str = arr[i - 1].length;
        arr[i] = str;
    }
    return arr;
}

console.log(previousLengths(['h8i','wooo','DOUBLEWOO']))

// 9
function addSevenToMost(arr) {
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

// 10
function reverse(arr) {
    let swapper;
    for (let i = 0; i < arr.length / 2; i++) {
        swapper = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = swapper;
    }
    return arr;
}

// 11
function returnNegatives(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = arr[i] * -1;
        }
    }
    return arr;
}

// 12
function alwaysHungry(arr) {
    let eat = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            eat = true;
        }
    }
    if (eat == false) {
        console.log("I'm hungry")
    }
}

// 13
function swapTowardCenter(arr) {
    let swapper;
    for (let i = 0; i < arr.length / 2; i += 2) {
        swapper = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = swapper;
    }
    return arr;
}

// 14
function scaleArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}