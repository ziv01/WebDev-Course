// Code goes here


// Example for function that doesn't return value
function logName(name) {
  name = "Eli";
  console.log(name)
}

var myName = "Nir";
logName(myName);
console.log(myName);

// Example for function that changes object value (it also changes outside)
function logObject(carObj)
{
  carObj.year = 2017;
  console.log(JSON.stringify(carObj));
}

var car = {
  year: 2010,
  model: "Porche"
}

logObject(car);
console.log(JSON.stringify(car));

// This function shows return value
function sum(x, y) {
  var sumOfXY = x + y;
  return sumOfXY;
}


console.log(sum(5, 6))
