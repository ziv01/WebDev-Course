// Code goes here

function powerNumbers()
  {
    var powerTwo = Math.pow(5, 2);
    document.getElementById("power1").innerHTML = "Result 5 power 2 =  " + powerTwo;
  }
  
function divideInteger()
  {
    var devideBy = (100/8);
    document.getElementById("power1").innerHTML = "<br> Result 100 div 8 = " + devideBy;
  }
  
function divideAlert()
  {
    /* variable roundedResultInt holds the rounder value of the division in integer. 
       variable unroundedResult holds the floating value of the division.
       variable holds the result of the diff times 8 in integer.
    */
    var roundedResultInt = Math.floor(100/8);
    var unroundedResult = (100/8);
    var quotient = (100 % 8);
    alert("Quotient for 100 div 8 = " + quotient);
  }
  
function concatinateStrings()
  {
    var string1 = " שלום";
    var string2 = " עולם";
    console.log(string1 + string2);
  }