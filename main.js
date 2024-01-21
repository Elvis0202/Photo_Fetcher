document.addEventListener("DOMContentLoaded", function () {
    // Get the checkbox element
    var flipSwitch = document.getElementById("fs");

    // Get the images
    var images = document.querySelectorAll(".pics");

    // Add a change event listener to the checkbox
    flipSwitch.addEventListener("change", function () {
        // Check if the checkbox is checked
        if (flipSwitch.checked) {
            // Apply grayscale filter to images
            images.forEach(function (image) {
                image.style.filter = "grayscale(100%)";
            });
        } else {
            // Remove grayscale filter
            images.forEach(function (image) {
                image.style.filter = "none";
            });
        }
    });
});
