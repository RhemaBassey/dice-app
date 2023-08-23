// Using the 'DOMContentLoaded' event allows you to ensure that your JavaScript code is executed
//only after the DOM is fully ready, providing a safe and reliable way to work with and manipulate elements on the page.
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("rollButton");
  var imageContainer = document.getElementById("imageContainer");
  var displayedImage = document.getElementById("displayedImage");

  var dieCount = document.getElementById("dieCount");

  button.addEventListener("click", function () {
    imageContainer.innerHTML = "";
    console.log(dieCount.value);

    // for (var i = 0; i < dieCount.value; i++) {
    //   dieFace = Math.floor(Math.random() * 6 + 1); //generates random numbers from [1,7), floor removes the decimal part, rounding to a lower number
    //   var newImage = document.createElement("img");
    //   newImage.src = "images/dice-face" + dieFace + ".png";
    //   newImage.alt = "dice " + dieFace;
    //   imageContainer.appendChild(newImage);
    // }

    imageContainer.classList.remove("hidden");
    imageContainer.classList.add("fade-in");

    setTimeout(function () {
      for (var i = 0; i < dieCount.value; i++) {
        dieFace = Math.floor(Math.random() * 6 + 1); //generates random numbers from [1,7), floor removes the decimal part, rounding to a lower number
        var newImage = document.createElement("img");
        newImage.src = "images/dice-face" + dieFace + ".png";
        newImage.alt = "dice " + dieFace;
        imageContainer.appendChild(newImage);
      }
  
      // displayedImage.src = "images/dice-face" + dieFace + ".png";
    }, 500); //displayed image changes first, to avoid image jerking (where past image still appears for brief moment after transition)
    setTimeout(function () {
      imageContainer.classList.remove("fade-in");
    }, 750); // a bit extra delay
  });
});
