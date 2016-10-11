

document.addEventListener("turbolinks:load", function() {
  
  var person = {
	id: 1,
	firstName: "John",
	lastName: "Doe",
	age: 50,
	eyeColor: "blue",
};

document.getElementById("firstname").innerHTML =
	"<th>" + person.id + "</th>" +
	"<td>" + person.firstName.toUpperCase() +
	"</td>" + "<td>" + person.lastName.toUpperCase() +
	"</td>" +  "<td>" + person.age + "</td>" +
	"<td>" + person.eyeColor.toUpperCase() + "</td>";

})