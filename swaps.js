'use strict';
// Implement a swap function for arrays. What are the inputs your function should take? What are the outputs?

//SWAP FUNCTION
  //Inputs: array, 2 indices of numbers to swap
  //Outputs: array (existing)

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function swap (array, index_A, index_B) {
  //temporarily store the contents of the first index
  var temp = array[index_A];
  // console.log(temp);

  //assign the contents of the second index to the first index
  array[index_A] = array[index_B];
  // console.log(array[index_A]);
  // console.log(array[index_B]);

  //take temporarily stored contents and assign to second index
  array[index_B] = temp;
}

swap(array, 5 , 7);
// console.log(array);

// Implement a reverse function for arrays using your swap function.

// Write pseudo-code to solve this, then write javascript.

//REVERSE FUNCTION
  //Inputs: array [1, 2, 3, 4]
  //Outputs: array [4, 3, 2, 1] (existing)

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverse(array){
  //starting value in array
  var i = 0;
  //find last value in array (last index = array.length -1)
  var j = array.length - 1;

  while (i < j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    //count up through i
    i++;
    // console.log('i', array[i]);
    //count down through j
    j--;
    // console.log(array[j]);
  }
}

reverse(array);
// console.log(array);
