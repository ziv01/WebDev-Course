// Code goes here

//define global variables:

var myArg = "madam";
var strLength = myArg.length;


function checkString(str){
// halfWay var hold the the index of half the string
// lastElement hold the index for the last char in the string
//isPolinom is a boolean to decide if it is a poligon or not.
  var halfWay = Math.floor(myArg.length / 2);
  var lastElement = myArg.length-1;
  var isPolinom = false;
  for (i=0;i<=halfWay;i++){
    if ((str[i] === str[lastElement]))
    {
      isPolinom = true;
	  // update the inddex of end char string
     lastElement = lastElement -1;  
    } else
    {
      isPolinom = false;
    }
  }
  if (isPolinom) {
      alert("The string is a poligon!");
  } else {
    alert("The string isn't a poligon!!");
  }
  
  }

checkString(myArg);
