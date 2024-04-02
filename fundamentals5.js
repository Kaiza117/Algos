// 1
function sigma(num){
    let sum = 0;
    for(i = 0; i <= num; i++){
        sum += i
    }
    return sum
}

console.log(sigma(5))

// 2
function factorial(num){
    let result = 1;
    for(i = 1; i <= num; i++){
        result = result * i
    }
    return result
}

console.log(factorial(5))

// 3
function drawLeftStars(num){
    let lStar = ''
    for(i = 0; i <= num; i++){
        lStar +='*' 
    }
    return lStar
}

console.log(drawLeftStars(6))

function drawRightStars(num){
    let rStar = ''
    for(i = 0; i <= 75; i++){
        rStar +='' 
    }
    let sPoint = 75 - num
    for(index = sPoint; index <= 75; index++){
        rStar[index] = '*'
    }
    return rStar
}

console.log(drawRightStars(50))
