// 1
function countdown(num){
    let arr = []
    while(num > 0){
        arr.push(num)
        num--
    }
}

console.log(countdown(5))

// 2
function pNr(arr){
    console.log(arr[0])
    return arr[1]
}

console.log(pNr([3,6]))

// 3
function fPl(arr){
    sum = arr[0] + arr.length
}

// 4
function values(arr){
    let counter = 0
    for (i in arr){
        if(arr[1]<arr[i]){
            console.log(arr[i])
            counter++
        }
    }
    return counter
}

console.log(values([1,3,5,7,9,13]))

// 5
function valuesGen(arr){
    let counter = 0
    let result = []
    if(arr.length > 2){
        for (i in arr){
            if(arr[1]<arr[i]){
                result.push(arr[i])
                counter++
            }
        }
        return result && counter
    }
    else {
        return "Size matters"
    }
}

console.log(valuesGen([1,2,8,1,5,7,1,56]))

// 6
function jinx(x, y){
    let arr =[]
    if(x==y){
        return "jinx"
    }
    else{
        for(i=0; i <x; i++)
        arr.push(y)
    }
    return arr
}

console.log(jinx(4,5))

// 7
function first(arr){
    if(arr.length > arr[0]){
        return "Too Small!"
    }
    if(arr.length <arr[0]){
        return "Too Big!"
    }
    else{
        return "Just Right!"
    }
}

console.log(first([5,3]))

// 8
function fToC(num){
    result = (num - 32) * (5/9)
    return result + " degrees celsius!"
}

console.log(fToC(89))

// 9
function cToF(num){
    result = ((9/5)*num) + 32
    return result + " degrees Fahrenheit!"
}

// Optional
function Optional(){
    let F = 0
    for(i=200;i<201;i--){
        F = ((9/5)*i) + 32
        if(i==F){
            return F + " is Matching!"
        }
    }
}

console.log(Optional())