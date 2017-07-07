var myString = "dog"; // The string we want to handle.
var stringLength = myString.length; // A variable we use to hold the string/array length.
var combination = ""; // A variable that will hold all the combinations of the string characters.
var tempArr = ["x"]; // A temporary array to hold the string chars in it.




// Initializing the temp array to hold single string char in each array cell.
function initArr(str) {
	for (i=0;i<stringLength;i++) {
		tempArr[i] = str[i];
}
	  return tempArr;
}

// doing the hard job
function strVariations(str) {
  var placeHolder = ""; // A variable that is holding the first element in the array. 
	initArr(str);
	stringLength = tempArr.length;
	for (i=0;i<stringLength;i++) {
      placeHolder = tempArr[0];
		combination += tempArr[0] + " ";
		for (z=1;z<stringLength;z++) {
			combination += tempArr[0] + tempArr[z] + " ";
		}
		
/* pushing the current first element in the array to it's end */
		  tempArr.push(placeHolder);
/* deleting the first array element */		  
		  tempArr.shift();
	}
	
// echoing the results into the console log	
	console.log("All the available combinations of the string " + myString + " are: " + combination);
	return combination;
}

strVariations(myString);
