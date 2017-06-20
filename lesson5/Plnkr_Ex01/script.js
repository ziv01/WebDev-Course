// Code goes here

function addTommato() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("עגבניה");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}
