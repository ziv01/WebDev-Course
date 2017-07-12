function removeSampleRow(id) {
    /***We get the table object based on given id ***/
    var objTable = document.getElementById(id);

    /*** Get the current row length ***/
    var iRow = objTable.rows.length;

    /*** Initial row counter ***/
    var counter = 0;

    /*** Performing a loop inside the table ***/
    if (objTable.rows.length > 1) {
        for (var i = 0; i < objTable.rows.length; i++) {

             /*** Get checkbox object ***/
            var chk = objTable.rows[i].cells[0].childNodes[0];
            if (chk.checked) {
                /*** if checked we del ***/
                objTable.deleteRow(i);
                iRow--;
                i--;
                counter = counter + 1;
            }
        }

        /*** Alert user if there is now row is selected to be deleted ***/
        if (counter == 0) {
            alert("Please select the row that you want to delete.");
        }
    }else{
        /*** Alert user if there are no rows being added ***/
        alert("There are no rows being added");
    }
}