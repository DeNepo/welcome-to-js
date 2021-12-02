// prettier-ignore
{ // so prettier does not remove the extra spacing

'use strict';

// ::::: don't forget to trace the program! :::::


let input = prompt('please do not cancel');


let message = '';


if (input === null) {


    message = 'you canceled :(';


} else {


    message = 'thank you for your input: ' + input;


}


alert(message);



}
