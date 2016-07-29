/*
=======================================================
Story:
User needs to take 4 to 6 telephone numbers
Then they need to know which number has the highest sum
=======================================================
*/

function isPhoneNumber (input) {
  var check = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
  return check.test(input);
}


function promptPhoneNumber (tryAgain) {
  var message = tryAgain ? 'Error! Please try again. Enter ten digit phone number' :
    'Enter phone number (ex: 303-555-0123)';

  var number = prompt(message, "xxx-xxx-xxxx");

  if (!isPhoneNumber(number)) {
    return promptPhoneNumber(true);
  } else {
    return number;
  }
}


function getLargestNumber (numbers) {
  var max = 0;

  numbers.forEach(function (number) {
    var sum = 0;
    number.split('').forEach(function (digit) {
      var num = parseInt(digit, 10);

      if (num) {
        sum += num;
      }
    });

    if (sum > max) {
      max = sum;
    }
  });

  return max;
}


var numbers = [];

for (var i=0;i<6;i++) {
  numbers.push(promptPhoneNumber());
}

console.log('max:', getLargestNumber(numbers));


// TAKE 2 USING Functions

// var totalPhoneNumbers = 2;
//
// var allPhoneNumbers = {
//   inputStrings: [],
//   inputNumbers: [],
//   summedNumbers: []
// };
//
//
// console.log(allPhoneNumbers);
