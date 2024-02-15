// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
    
// };

// module.exports = { isValid };

// const prompt=require("prompt-sync")();
// //my code
// // function isValidInput(input) {
// //     let stack = [];
// //     const openingBraces = ['[', '{', '('];
// //     const closingBraces = [']', '}', ')'];

// //     for (let char of input) {
// //         if (openingBraces.includes(char)) {
// //             stack.push(char);
// //         } else if (closingBraces.includes(char)) {
// //             let lastOpening = stack.pop();
// //             if (!lastOpening || openingBraces.indexOf(lastOpening) !== closingBraces.indexOf(char)) {
// //                 return false;
// //             }
// //         }
// //     }

// //     return stack.length === 0;
// // }

// // function getUserInput() {
// //     let userInput = prompt("Enter input using only (), [], {}:");

// //     if (isValidInput(userInput)) {
// //         console.log("true");
// //     } else {
// // //         console.log("false");
// // //     }
// // // }

// // // // Call the function to get user input
// // // getUserInput();

// // //second 
// // function isValidInput(input) {
// //     let stack = [];
// //     const openingBraces = ['{', '[', '('];
// //     const closingBraces = ['}', ']', ')'];

// //     for (let char of input) {
// //         if (!['{', '}', '[', ']', '(', ')'].includes(char)) {
// //             // If any character other than {}, [], () is encountered, return false
// //             return false;
// //         }

// //         if (openingBraces.includes(char)) {
// //             stack.push(char);
// //         } else if (closingBraces.includes(char)) {
// //             let lastOpening = stack.pop();
// //             if (!lastOpening || openingBraces.indexOf(lastOpening) !== closingBraces.indexOf(char)) {
// //                 return false;
// //             }
// //         }
// //     }

// //     return stack.length === 0;
// // }

// // function getUserInput() {
// //     let userInput = prompt("Enter input using only (), [], {}:");

// //     if (isValidInput(userInput)) {
// //         console.log("True");
// //     } else {
// //         console.log("False");
// //     }
// // }

// // // Call the function to get user input
// // getUserInput();
// //third
// function isValidInput(input) {
//     let stack = [];
//     const openingBraces = ['(', '[', '{'];
//     const closingBraces = [')', ']', '}'];

//     for (let char of input) {
//         if (!['(', ')', '[', ']', '{', '}'].includes(char)) {
//             // If any character other than '()', '[]', '{}' is encountered, return false
//             return false;
//         }

//         if (openingBraces.includes(char)) {
//             stack.push(char);
//         } else if (closingBraces.includes(char)) {
//             let lastOpening = stack.pop();
//             if (!lastOpening || openingBraces.indexOf(lastOpening) !== closingBraces.indexOf(char)) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// }

// // Examples         // Output: false
// program1.js

function isValid(input) {
    const stack = [];
    const openingBraces = ['(', '[', '{'];
    const closingBraces = [')', ']', '}'];

    for (let char of input) {
        if (!['(', ')', '[', ']', '{', '}'].includes(char)) {
            // If any character other than '()', '[]', '{}' is encountered, return false
            return false;
        }

        if (openingBraces.includes(char)) {
            stack.push(char);
        } else if (closingBraces.includes(char)) {
            let lastOpening = stack.pop();
            if (!lastOpening || openingBraces.indexOf(lastOpening) !== closingBraces.indexOf(char)) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

module.exports = { isValid };
