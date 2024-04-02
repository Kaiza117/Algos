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
        rStar +=' ' 
    }
    for(i = 0; i <= num; i++){
        rStar +='*' 
    }
    return rStar
}

console.log(drawRightStars(50))

function drawCenteredStars(num, char){
    let cStar = ''
    for(i = 0; i <= 33; i++){
        cStar +=' ' 
    }
    for(i = 0; i <= num; i++){
        cStar += char
    }
    for(i = 0; i <= 32; i++){
        cStar +=' ' 
    }
    return cStar
}

console.log(drawCenteredStars(6, 'w'))
