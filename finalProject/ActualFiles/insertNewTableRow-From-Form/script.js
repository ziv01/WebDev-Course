// Code goes here

function addNewRecord(form) {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
   
    
    cell1.innerHTML = form.fullName.value;
    cell2.innerHTML = form.address.value;
    cell3.innerHTML = form.email.value;
    cell4.innerHTML = form.phone.value;
    cell5.innerHTML = form.mobile.value;
    cell6.innerHTML = form.company.value;
    cell7.innerHTML = form.compnayID.value;
}