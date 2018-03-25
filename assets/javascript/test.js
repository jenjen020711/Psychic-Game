function generateRandomNumber(range, starting){
    var r = Math.floor( Math.random() * range) + starting;
    return r 
}

var X = generateRandomNumber(20, 1);
console.log(X);

var y = generateRandomNumber(50, 40);
console.log(y);