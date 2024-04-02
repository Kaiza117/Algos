// 1
function keepFew(arr, num){
    arr.splice(0, arr.length - num);
    return arr
}

console.log(keepFew([1,2,3,4,5,6], 2))

// 2
function mathHelp(m, b){
    x = (b * -1)/m
    return x
}

console.log(mathHelp(-4, 12))

// 3
function kenny(){
    result = Math.random() * 100
    if(result <= 10){
        return "volacano"
    }
    else if(result <= 25){
        return "tsunami"
    }
    else if(result <= 45){
        return "earthquake"
    }
    else if(result <= 70){
        return "blizzard"
    }
    else if(result <= 100){
        return "meteor"
    }
}

console.log(kenny())

// 4
function kyle(){
    volcano = Math.random() * 100
    tsunami = Math.random() * 100
    earthquake = Math.random() * 100
    blizzard = Math.random() * 100
    meteor = Math.random() * 100
    let counter = 0
    if(volcano <= 10){
        counter++
        console.log('volcano happened!!')
    }
    if(tsunami <= 15){
        counter++
        console.log('tsunami happened!!')
    }
    if(earthquake <= 20){
        counter++
        console.log('earthquake happened!!')
    }
    if(blizzard <= 25){
        counter++
        console.log('blizzard happened!!')
    }
    if(meteor <= 30){
        counter++
        console.log('meteor happened!!')
    }
    if(counter == 5){
        console.log("Homie is dead, no hope")
    }
}

console.log(kyle())

// 5
function iq(){
    let sum = 0
    let result = 101;
    for (let i = 0; i < 98; i++){
        sum += i/100
    }
    return sum + result
}

console.log(iq())

// 6
function grades(num){
    if(num < 60){
        return 'score:' + num + '.Grade: F' 
    }
    else if(num < 70){
        return 'score:' + num + '.Grade: D' 
    }
    else if(num < 80){
        return 'score:' + num + '.Grade: C' 
    }
    else if(num < 90){
        return 'score:' + num + '.Grade: B' 
    }
    else if(num <= 100){
        return 'score:' + num + '.Grade: A' 
    }
}

console.log(grades(98))