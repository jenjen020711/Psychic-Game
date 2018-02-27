var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
        "t", "u", "v", "w", "x", "y", "z"];

        document.onkeyup = function() {
            var userGuess = String.fromCharCode(event.keyCode)
                toLowerCase();

            console.log(userGuess); 

            var computerGuess = options[Math.floor(Math.random()*options.length)];

            console.log(computerGuess);

        if (userGuess = computerGuess){
            wins++;
            alert("You Win!");        }
        }