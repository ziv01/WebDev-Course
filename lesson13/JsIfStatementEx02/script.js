// Code goes here


// define three variables and asing integer values to each
var num1 = -5;
var num2 = -2;
var num3 = -6;
var num4 = 0;
var num5 = -1;

// Check which of the two first numbers is the bigger one,
if (num1 > num2) {
  //echo number1 to the console.log as the bigger one
  console.log("number1 is the bigger one!");
} else {
  //echo number2 is bigger than number1
  console.log("number2 is the bigger one! ");
}

/* Set variable sumNumber to hold the sum of the three values
   Check if the sum divided by -1 is negative or positive and assign it
   to the variable sumNumbersSign. If the sun divided by -1 is positive
   the the sum was negative and vice versa. */
var sumNumber = num1 + num2 + num3;
var sumNumbersSign = (sumNumber / -1);

if (sumNumbersSign >= 0) {
  console.log("The sum of the numbers is negative")
} else {
  console.log("The sum of the numbers is positive")
}

// Devine variable (max) to hold the biggest,smallest and mid number of the three
var max = 0;
var mid = 0;
var min = 0;

//who is the biggter one.. 
if((num1>=num2)&&(num1>=num3)) {
  max = num1;
} else
if((num2>= num1)&&(num2>=num3)){
  max = num2;
} else
{
  max = num3;
}


//who is the smallest one?

if((num1<=num2)&&(num1<=num3)) {
  min = num1;
} else
if((num2<= num1)&&(num2<=num3)){
  min = num2;
} else
{
  min = num3;
}

//who is the mid one?

if((num1>=num2)&&(num1<=num3)) {
  mid = num1;
} else
if((num2>= num1)&&(num2<=num3)){
  mid = num2;
} else
{
  mid = num3;
}

console.log("OutPut = " + max, mid, min);

/*who is the biggter one..  
  First initialize the max variable to be 0 */
/* test for the biggest numer and echo it to the console log */  
  
max = 0;

if((num1>=num2)&&(num1>=num3)&&(num1>=num4)&&(num1>=num5)) {
  max = num1;
} else
if((num2>=num1)&&(num2>=num3)&&(num2>=num4)&&(num2>=num5)){
  max = num2;
} else
if((num3>=num1)&&(num3>=num3)&&(num3>=num4)&&(num3>=num5)){
  max = num3;
} else
if((num4>=num1)&&(num4>=num3)&&(num4>=num4)&&(num4>=num5)){
  max = num4;
} else
{
  max = num5;
}
console.log("Max number is: " + max);


/* define an array to hold the grades. the array will hold records of grade and name
   for each student */
// defining a student record for each student..
var student1 = {
    studentName : "David",
    studentGrade : 80,
    };
var student2 = {
    studentName : "Vinoth",
    studentGrade : 77,
    };
var student3 = {
    studentName : "Divya",
    studentGrade : 88,
    };
var student4 = {
    studentName : "Ishitha",
    studentGrade : 95,
    };
var student5 = {
    studentName : "Thomas",
    studentGrade : 68,
    };

/* Check each and every record for the grade status acording to grade mark */

if(student1.studentGrade<60) {
  console.log(student1.studentName + " mark is VERY POOR")
} else
if(student1.studentGrade<70) {
    console.log(student1.studentName + " mark is POOR")
} else
if(student1.studentGrade<80) {
    console.log(student1.studentName + " mark is MEDIOCRE")
} else
if(student1.studentGrade<90) {
    console.log(student1.studentName + " mark is GOOD")
} else
if(student1.studentGrade<100) {
    console.log(student1.studentName + " mark is VERY GOOD")
}
else
{
      console.log(student1.studentName + " mark is EXCELENT")
}



if(student2.studentGrade<60) {
  console.log(student2.studentName + " mark is VERY POOR")
} else
if(student2.studentGrade<70) {
    console.log(student2.studentName + " mark is POOR")
} else
if(student2.studentGrade<80) {
    console.log(student2.studentName + " mark is MEDIOCRE")
} else
if(student2.studentGrade<90) {
    console.log(student2.studentName + " mark is GOOD")
} else
if(student2.studentGrade<100) {
    console.log(student2.studentName + " mark is VERY GOOD")
}
else
{
      console.log(student2.studentName + " mark is EXCELENT")
}


if(student3.studentGrade<60) {
  console.log(student3.studentName + " mark is VERY POOR")
} else
if(student3.studentGrade<70) {
    console.log(student3.studentName + " mark is POOR")
} else
if(student3.studentGrade<80) {
    console.log(student3.studentName + " mark is MEDIOCRE")
} else
if(student3.studentGrade<90) {
    console.log(student3.studentName + " mark is GOOD")
} else
if(student3.studentGrade<100) {
    console.log(student3.studentName + " mark is VERY GOOD")
}
else
{
      console.log(student3.studentName + " mark is EXCELENT")
}


if(student4.studentGrade<60) {
  console.log(student4.studentName + " mark is VERY POOR")
} else
if(student4.studentGrade<70) {
    console.log(student4.studentName + " mark is POOR")
} else
if(student4.studentGrade<80) {
    console.log(student4.studentName + " mark is MEDIOCRE")
} else
if(student4.studentGrade<90) {
    console.log(student4.studentName + " mark is GOOD")
} else
if(student4.studentGrade<100) {
    console.log(student4.studentName + " mark is VERY GOOD")
}
else
{
      console.log(student4.studentName + " mark is EXCELENT")
}


if(student5.studentGrade<60) {
  console.log(student5.studentName + " mark is VERY POOR")
} else
if(student5.studentGrade<70) {
    console.log(student5.studentName + " mark is POOR")
} else
if(student5.studentGrade<80) {
    console.log(student5.studentName + " mark is MEDIOCRE")
} else
if(student5.studentGrade<90) {
    console.log(student5.studentName + " mark is GOOD")
} else
if(student5.studentGrade<100) {
    console.log(student5.studentName + " mark is VERY GOOD")
}
else
{
      console.log(student5.studentName + " mark is EXCELENT")
}

