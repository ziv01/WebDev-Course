// Code goes here

function addToList() {
  
  // Option 1
  /*
  var liElement = document.createElement("li");
  liElement.innerHTML = "עגבניה";
  document.getElementById("list1").appendChild(liElement);
  */

  // Option 2
  document.getElementById("list1").innerHTML +=  "<li>עגניה</li>";
}