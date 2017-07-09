// Code goes here

function sortTheNumbers(form) {
  var num1 = parseInt(form.firstIint.value);
  var num2 = parseInt(form.secondIint.value);
  var num3 = parseInt(form.thirdInt.value);

  //who is the biggter one.. 
  if ((num1 >= num2) && (num1 >= num3)) {
    max = num1;
  } else
  if ((num2 >= num1) && (num2 >= num3)) {
    max = num2;
  } else {
    max = num3;
  }

  //who is the smallest one?

  if ((num1 <= num2) && (num1 <= num3)) {
    min = num1;
  } else
  if ((num2 <= num1) && (num2 <= num3)) {
    min = num2;
  } else {
    min = num3;
  }

  //who is the mid one?

  if ((num1 >= num2) && (num1 <= num3)) {
    mid = num1;
  } else
  if ((num2 >= num1) && (num2 <= num3)) {
    mid = num2;
  } else {
    mid = num3;
  }

  console.log("OutPut = " + max, mid, min);
  document.getElementById('textSection').value = "Sorted: " + max + " " + mid + " " + min;
}