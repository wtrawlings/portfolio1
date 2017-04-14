var welcomeUser = function () {
  console.log("welcome to the BAR.");
}

var checkID = function(person) {
  if (typeof person == "object" && person.age >= 21) {
    console.log(person.age + " GET KRUNK");
  } else {
    console.log("No Soup for YOU!");
  }
}

var denyUser = function (person) {
  if (person.num_pets > 1) {
  console.log("Too Many Pets!")
} else {console.log("Not enough Love")}
}



console.log("This is a test")

var user = {
  name:{first: "Warren", last: "Rawlings"},
  age:50,
  num_pets:2
};

console.log(user.num_pets);
console.log(user.name.last);
var html = document.getElementById("age")
html.innerHTML += user.age;
var html = document.getElementById("name1")
html.innerHTML += user.name.first + " " + user.name.last;

welcomeUser();
checkID(user);
denyUser(user);

// var html = document.getElementById("age_set")
// html.innerHTML += readTextFile("../data/alpha.txt");

var append1 = document.getElementById('main');
append1.innerHTML = ../data/alpha.txt;
