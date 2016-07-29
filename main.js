/*
=======================================================
In class problem:
User needs to take 4 to 6 telephone numbers
Then they need to know which number has the highest sum
=======================================================
*/


var totalPhoneNumbers = 4;

var allPhoneNumbers = {
  inputStrings: [],
  inputNumbers: [],
  summedNumbers: []
};


function cleanPhoneNumber(phoneString) {
  var phoneNumber = phoneString.replace( /[^0-9]/g, '' );

  if (phoneNumber.length === 10){
    return phoneNumber;
  } else if (phoneNumber.length === 11 && phoneString.startsWith('1')) {
    phoneNumber = phoneNumber.substring(1);
    return phoneNumber;
  } else {
    return 'invalid'
  }
};


for (i = 0; i < totalPhoneNumbers; i++) {
  var invalid = false;

  do {
    var message;

    if (invalid === true) {
      message = 'Error! Please try again.';
    } else {
      message = 'Enter phone number (ex: 303-555-0123)';
    };

    var phoneNumberString = prompt(message, "xxx-xxx-xxxx");

    if (cleanPhoneNumber(phoneNumberString) === 'invalid') {
      invalid = true;
    }else{
      invalid = false;
      var phoneNumber = cleanPhoneNumber(phoneNumberString);
      allPhoneNumbers.inputNumbers.push(phoneNumber);
    };

  } while (invalid === true);

  allPhoneNumbers.inputStrings.push(phoneNumberString);


  var sum = 0;

  for(j = 0; j<phoneNumber.length; j++){
    sum += parseInt(phoneNumber.charAt(j));
  };

  allPhoneNumbers.summedNumbers.push(sum);

};

console.log('Phone number inupt array: ' + allPhoneNumbers.inputNumbers);
console.log('Phone number sum array: ' + allPhoneNumbers.summedNumbers);


var max = 0;
for (i = 0; i < allPhoneNumbers.summedNumbers.length; i++) {
  if (allPhoneNumbers.summedNumbers[i] > max) {
    max = allPhoneNumbers.summedNumbers[i]
    var index = i;
  };
};

console.log('The phone number with the longest length is: ' + allPhoneNumbers.inputStrings[index]);
