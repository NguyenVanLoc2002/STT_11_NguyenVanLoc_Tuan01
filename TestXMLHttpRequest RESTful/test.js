//Get all users

var url = "https://my-json-server.typicode.com/typicode/demo/posts";
// var url = "http://localhost:5500/api/v1/users";
var xhr = new XMLHttpRequest();
xhr.open("GET", url + "/1", true);
xhr.onload = function () {
  var users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.table(users);
  } else {
    console.error(users);
  }
};
xhr.send(null);


// Post a user
// var data = {};
// data.firstname = "John";
// data.lastname = "Snow";
// data.fullname = data.firstname + " " + data.lastname;
// var json = JSON.stringify(data);
// var xhr = new XMLHttpRequest();
// xhr.open("POST", url, true);
// xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
// xhr.onload = function () {
//   var users = JSON.parse(xhr.responseText);
//   if (xhr.readyState == 4 && xhr.status == "201") {
//     console.table(users);
//   } else {
//     console.error(users);
//   }
// };
// xhr.send(json);

// Update a user

// var data = {};
// data.firstname = "John2";
// data.lastname = "Snow2";
// var json = JSON.stringify(data);
// var xhr = new XMLHttpRequest();
// xhr.open("PUT", url + "/1", true);
// xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
// xhr.onload = function () {
//   var users = JSON.parse(xhr.responseText);
//   if (xhr.readyState == 4 && xhr.status == "200") {
//     console.table(users);
//   } else {
//     console.error(users);
//   }
// };
// xhr.send(json);

// Delete a user

// var xhr = new XMLHttpRequest();
// xhr.open("DELETE", url + "/1", true);
// xhr.onload = function () {
//   var users = JSON.parse(xhr.responseText);
//   if (xhr.readyState == 4 && xhr.status == "200") {
//     console.table(users);
//   } else {
//     console.error(users);
//   }
// };
// xhr.send("null");
