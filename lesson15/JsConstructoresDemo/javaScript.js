// Code goes here

function Student (fullName,avGrade) {
  this.fullName = fullName,
  this.avGrade = avGrade
}

var student1 = new Student("John Doe", 77);
var student2 = new Student("Jenny Donge", 82);
var student3 = new Student("John Elton", 94);
var studentArray = [student1,student2,student3];



function calculateGrades() {
      var sum = 0;
      var amg = 0;
  for(i=0;i<studentArray.length;i++) {
    sum += studentArray[i].avGrade;

}
    avg = sum / 3;
    console.log("The ang grade is: " + avg);
}

calculateGrades();