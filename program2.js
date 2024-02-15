/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
};


module.exports={romanToInt}
// program2.js

// program2.js

// program2.js

// program2.js

// program2.js

function romanToInt(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentSymbolValue = romanValues[s[i]];
        const nextSymbolValue = romanValues[s[i + 1]];

        if (nextSymbolValue > currentSymbolValue) {
            // Subtraction case (e.g., IV, IX, XL, XC, CD, CM)
            result += nextSymbolValue - currentSymbolValue;
            i++; // Skip the next symbol, as it has already been considered
        } else {
            result += currentSymbolValue;
        }
    }

    return result;
}

module.exports = { romanToInt };
