const {numbers} = require('./data')

function addArray(){
    let total = 0;
    for (i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

module.exports = {addArray};