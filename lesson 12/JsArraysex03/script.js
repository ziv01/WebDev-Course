// Code goes here


// Define the array of even numbers and echo it to the log.
var evenNumbersArray = [2,4,6,8,10,12,14,16,18,20];
console.log(evenNumbersArray);

// Echo the length of the array to the log.
console.log(evenNumbersArray.length);

// Echo to the log array items 1, 3 , 6.
console.log(evenNumbersArray[0],evenNumbersArray[2],evenNumbersArray[5]);


// Define a var that will hold the index ID of the array location holding the value 10 and then echo it to the log.
var arrayIndexPlace = evenNumbersArray.indexOf(10);
console.log(arrayIndexPlace);

// Remove the two last elements in the array and echo the array to the log.

arrayLength = evenNumbersArray.length;
evenNumbersArray.splice ((arrayLength-2),2);
console.log(evenNumbersArray);


// Creating a new array of 10 records with number and number in English, and echo it to the log.

var records = [1, "one", 2, "two", 3, "three", 4, "four", 5, "five"];
console.log(records);

// Create an array of students records and echo it to the log

var record1 = {
        studentName : "Boaz",
        StudentHeight : 182,
        eyeColor : "blue"
}

var record2 = {
        studentName : "Arie",
        StudentHeight : 180,
        eyeColor : "brown"
}

var record3 = {
        studentName : "Sherry",
        StudentHeight : 170,
        eyeColor : "green"
}

var record4 = {
        studentName : "Shmulik",
        StudentHeight : 168,
        eyeColor : "brown"
}

var record5 = {
        studentName : "Anna",
        StudentHeight : 167,
        eyeColor : "blue"
}

var record6 = {
        studentName : "Tanya",
        StudentHeight : 169,
        eyeColor : "brown"
}


var studentrsArray = [record1,record2,record3,record4,record5,record6]
console.log(studentrsArray);

studentrsArray.shift();
console.log(studentrsArray);

// Add to the begining of the array a record with the instructure's details.

var instructure = {
    instructureName : "Nir",
    instructureHeight : 173,
    eyeColor : "brown"
      
}

studentrsArray.splice (0,0,instructure);
console.log(studentrsArray);


/* Update the first element in the array that will replace the eyeColor attribute with a new object named "Face"
That will have hold another object with the key "eyes" which will have value "color" */

var eyesObject = { 
      color : "blue"
      
}

var faceObject = {
      eyes :"",
}

// Replace first element in the array with attribute face instead of eyeColor.

var instructure = {
    instructureName : "Nir",
    instructureHeight : 173,
    face : "brown"

}

studentrsArray[0] = instructure;

console.log(instructure);

faceObject.eyes = eyesObject;
studentrsArray[0].face = faceObject;

console.log(studentrsArray[0]);








