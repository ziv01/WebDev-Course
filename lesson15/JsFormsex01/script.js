// Code goes here



function whoIsTheBigger (form){

var num1 = parseInt(form.firstNum.value);
var num2 = parseInt(form.secondNum.value);

//who is the biggter one.. 
if(num1>=num2) {
     console.log("the biggest number is: " +num1);
}  else
{
    alert("the biggest number is: " +num2);
}

}