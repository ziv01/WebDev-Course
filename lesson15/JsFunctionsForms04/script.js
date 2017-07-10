/*JavaScript section
function myFunction() {
    var currentClass = document.getElementById("flag");
	console.log(document.getElementById("flag").className);
	if (currentClass == "col-2") {
		document.getElementById("flag").className += " tooltip";
		console.log(document.getElementById("flag").className);
	} else {
		document.getElementById("flag").className = "col-2";
		console.log(document.getElementById("flag").className);
	}
}
*/
function myFunction() {
  var x = document.getElementById("flag");
  if (x.className === "col-2") {
    x.className += " tooltip";
	console.log("Ïf section " + document.getElementById("flag").className);
  } else {
    x.className = "col-2";
	console.log("Else section" + document.getElementById("flag").className);
  }
}	