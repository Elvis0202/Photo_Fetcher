document.addEventListener("DOMContentLoaded", function () {
    // Get the checkbox element
    let flipSwitch = document.getElementById("fs");

    // Get the images
    let images = document.querySelectorAll(".photo_container");

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


document.addEventListener("DOMContentLoaded", function () {
    // Get the button element for fetching new photos
     fetchButton = document.querySelector(".button");

    // Get the images container
    let photoContainer = document.querySelector(".photo_container");

    // Add a click event listener to the fetchButton
    fetchButton.addEventListener("click", function () {
        // Clear existing photos
        photoContainer.innerHTML = "";

        // Fetch new photos from Picsum Photos API and generate 4 new photos
        fetchPhotos();
    });

    // Function to fetch and generate 4 new photos from Picsum Photos API
    function fetchPhotos() {
        // Generate 4 random photo URLs
        for (let i = 0; i < 4; i++) {
            let randomWidth = Math.floor(Math.random() * 800) + 200; // Random width between 200 and 1000
            let randomHeight = Math.floor(Math.random() * 800) + 200; // Random height between 200 and 1000
            let imgUrl = `https://picsum.photos/${randomWidth}/${randomHeight}`;

            // Create image element
            let img = document.createElement("img");
            img.className = "pics";
            img.src = imgUrl;
            photoContainer.appendChild(img);
        }
    }

    
});



