// Code goes here



function charInString(form) {
   var singleWord = form.singleWord.value;
   var singleChar = form.singleChar.value;
   var charCount = 0;
   var results = " ";
   arrayOfChars = singleWord.split("");
   charCount = countChars(arrayOfChars,singleChar);
   results = "The nummber of " + singleChar + " whithin the string " + singleWord + " is: " + charCount
   document.getElementById('textSection').value = results;
}

function countChars(array,str) {
  var charInstance = 0;
  for (i=0;i<array.length;i++) {
      if (array[i] === str) {
        charInstance += 1;
      }
  }
  return charInstance;
}
   