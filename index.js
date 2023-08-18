// Using the 'DOMContentLoaded' event allows you to ensure that your JavaScript code is executed
//only after the DOM is fully ready, providing a safe and reliable way to work with and manipulate elements on the page.
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("rollButton");
  button.addEventListener("click", function () {
    dieFace = Math.floor(Math.random() * 6 + 1); //generates random numbers from [1,7), floor removes the decimal part, rounding to a lower number
    alert("You rolled: " + dieFace);
  });
});
