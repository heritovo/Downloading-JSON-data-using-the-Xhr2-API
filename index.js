function search(){
  var queryURL = "https://jsonplaceholder.typicode.com/users";

  var xhr = new XMLHttpRequest();

  xhr.open('GET', queryURL, true);
  
  // called when the response arrived 
  
  xhr.onload = function(e) {
    var jsonResponse = xhr.response;
  
    var users = JSON.parse(jsonResponse);
    diaplayUsersAsATable(users);
  }
  
  // in case of error
  
  xhr.onerror = function err(){
    console.log("Error" + err);
  }

  xhr.send();
}

function diaplayUsersAsATable(users){
 // users is a javascript object

 //empty the div that will contain the result
 
 var userDiv = document.querySelector("#users");
  userDiv.innerHTML="";

  // create and populate  the table with users

  var table = document.createElement("table");

  users.forEach(function(currentUser){
    //create a row
    var row = table.insertRow();
    //insert cells in the row
    var nameCell = row.insertCell();
    nameCell.innerHTML = currentUser.name;
    var cityCell = row.insertCell();
    cityCell.innerHTML = currentUser.address.city;

  });
  userDiv.appendChild(table);
}




