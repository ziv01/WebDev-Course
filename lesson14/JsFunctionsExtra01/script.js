// Code goes here

//define global variables:

var myArg = 62435;
var resultsArray = [0, 0, 0, 0, 0];

// This function get an integer and get modulous by 10.
function getModulous(number) {
  var result = (number % 10);
  //console.log("Modulous result is: " + result);
  return result;
}

//This function divide the number by ten and round it down.
function divByTen(number) {
  var result = (Math.floor(number / 10));
  //console.log("Divided by ten: " + result);
  return result;
}

// This function print out the reversed number from the array.
function printArrayElements(number){
  for(i=0;i<5;i++) {
    console.log("The revers number is: " + number[i]);
  }
}

//This function call fot the other functions and compute the revese number
function reversNumber(number) {
  for (i = 0; i < 5; i++) {
    //console.log("Getting the counter rev: " + i)
    resultsArray[i] = getModulous(myArg);
    myArg = divByTen(myArg);
  }
  printArrayElements(resultsArray);
}


//Calling the function that do all the work.
reversNumber(myArg);