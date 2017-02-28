'use strict';
// Implement a swap function for arrays. What are the inputs your function should take? What are the outputs?

//SWAP FUNCTION
  //Inputs: array, 2 indices of numbers to swap
  //Outputs: array (existing)

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function swap (array, index_A, index_B) {
  //temporarily store the contents of the first index
  var temp = array[index_A];

  //assign the contents of the second index to the first index
  array[index_A] = array[index_B];

  //take temporarily stored contents and assign to second index
  array[index_B] = temp;
}

swap(array, 5 , 7);
// console.log(array);

/////////REVERSE FUNCTION//////////

// Implement a reverse function for arrays using your swap function.

// Write pseudo-code to solve this, then write javascript.

  //create variable for starting value in array
  //create variable for last value in array (array.length - 1)
  //while starting value is less than last value
  //assign starting value to temp
  //replace starting value with last value
  //assign last value to temp/first value
  //count up 1 from starting value
  //count down 1 from ending value

  //Inputs: array [1, 2, 3, 4]
  //Outputs: array [4, 3, 2, 1] (existing)

var array = [1, 2, 3, 4];

function reverse(array){

  var i = 0;
  var j = array.length - 1;

  while (i < j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    i++;
    j--;
  }
}

reverse(array);
// console.log(array);
