var choice = prompt(
  "Welcome to Area Calculator. \n Please Enter Your Choice. \n1. Area of Rectangle. \n2. Area of Triangle. \n3. Area of Circle. \n 4. Area of Parallelogram."
);

if (choice == "1") {
  var l = prompt("Enter the Length");
  var b = prompt("Enter the Breadth");
  var result = Number(1) * Number(b);
  alert("The Area is" + result);
}
if (choice == "2") {
  var h = prompt("Enter the Height");
  var b = prompt("Enter the Base");
  var result = (NUmber(h) * Number(b)) / 2;
  alert("The Area is" + result);
}

if (choice == "3") {
  var r = prompt("Enter the radius");
  var result = 3.14 * Number(r) * Number(r);
  alert("The Area is" + result);
}

if (choice == "4") {
  var h = prompt("Enter the height");
  var cb = prompt("Enter the corresponding base");
  var result = Number(h) * Number(cb);
  alert("The Area is" + result);
}
