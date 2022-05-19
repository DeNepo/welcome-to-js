'use strict';

/* Full Name

  This program combines two names into a full name.

  Data In:
    a first name
    a last name

  Data Out:
    the two names combined into one full name

  Test Cases:

*/

/* ---  ___  --- */

let firstName = null;
while (firstName === null) {
  firstName = prompt('enter a first name');
}
console.log('first name:', firstName);

/* ---  ___  --- */

let lastName = null;
while (lastName === null) {
  lastName = prompt('enter a last name');
}
console.log('last name:', lastName);

/* ---  ___  --- */

// fullName <- firstName + ' ' + lastName
//  don't forget to declare with `let`!
__;
console.log('full name:', fullName);

/* ---    --- */

alert(fullName);
