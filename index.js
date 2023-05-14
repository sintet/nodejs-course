const repl = require('repl');

function getRandomNumber() {
    return  Math.floor(Math.random() * 100)
}

console.log(getRandomNumber())

repl.start()